"use client";
import { useState } from "react";
import {
  Search,
  Download,
  Copy,
  ChevronDown,
  ChevronUp,
  Globe,
  Zap,
  Eye,
  Shield,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

const CircularProgress = ({
  score,
  size = 120,
}: {
  score: number;
  size?: number;
}) => {
  const radius = (size - 20) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getColor = (score: number) => {
    if (score >= 90) return "#10B981";
    if (score >= 70) return "#F59E0B";
    return "#EF4444";
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(score)}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-900">{score}</span>
      </div>
    </div>
  );
};

const IssueBadge = ({ type, text }: { type: string; text: string }) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-4 h-4" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4" />;
      case "error":
        return <XCircle className="w-4 h-4" />;
      default:
        return <CheckCircle className="w-4 h-4" />;
    }
  };

  const getVariant = () => {
    switch (type) {
      case "success":
        return "default";
      case "warning":
        return "secondary";
      case "error":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <Badge
      variant={getVariant() as any}
      className="flex items-center gap-1 mb-2"
    >
      {getIcon()}
      <span className="text-xs">{text}</span>
    </Badge>
  );
};

const AnalysisCard = ({
  title,
  icon: Icon,
  data,
  isExpanded,
  onToggle,
}: {
  title: string;
  icon: any;
  data: any;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <Card className="h-fit">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon className="w-5 h-5" />
          {title}
        </CardTitle>
        <div className="flex items-center justify-between">
          <CircularProgress score={data.score} size={80} />
          <div className="flex-1 ml-4">
            <p className="text-sm text-gray-600 mb-2">{data.summary}</p>
            <div className="text-xs text-gray-500">Score: {data.score}/100</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Collapsible open={isExpanded} onOpenChange={onToggle}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto"
            >
              <span className="text-sm font-medium">
                {isExpanded ? "Hide Details" : "Show Details"}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">
                  Issues & Recommendations
                </h4>
                <div className="space-y-1">
                  {data.issues.map((issue: any, index: number) => (
                    <IssueBadge
                      key={index}
                      type={issue.type}
                      text={issue.text}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-2">Metrics</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(data.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}:
                      </span>
                      <span className="font-medium">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default function SiteScan() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const { toast } = useToast();

  const validateUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleScan = async () => {
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a URL",
        variant: "destructive",
      });
      return;
    }

    let formattedUrl = url.trim();
    if (
      !formattedUrl.startsWith("http://") &&
      !formattedUrl.startsWith("https://") 
    ) {
      formattedUrl = "https://"  + formattedUrl;
    }

    if (!validateUrl(formattedUrl)) {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: formattedUrl }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Analysis failed");
      }

      const analysisResults = await response.json();
      setResults(analysisResults);

      toast({
        title: "Analysis Complete",
        description: "Website analysis has been completed successfully",
      });
    } catch (error: any) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis Failed",
        description:
          error.message || "Failed to analyze website. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = () => {
    if (!results) return;
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `sitescan-report-${
      new Date().toISOString().split("T")[0]
    }.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Export Successful",
      description: "Report has been downloaded successfully",
    });
  };

  const handleCopy = async () => {
    if (!results) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(results, null, 2));
      toast({
        title: "Copied to Clipboard",
        description: "Analysis results have been copied to your clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy results to clipboard",
        variant: "destructive",
      });
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Globe className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">SiteScan</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Analyze Your Website in Seconds
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Check performance, SEO, accessibility, and best practices with
              SiteScan.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-4">
                <Input
                  type="url"
                  placeholder="Enter website URL (e.g., https://example.com)" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 h-12 text-lg"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleScan}
                  disabled={isLoading}
                  className="h-12 px-8 text-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Scanning...
                    </div>
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Scan Now
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {results && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <Card className="max-w-md mx-auto">
                  <CardHeader>
                    <CardTitle>Overall Score</CardTitle>
                    <CardDescription>Analysis for {results.url}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <CircularProgress score={results.overall} size={120} />
                    <p className="mt-4 text-sm text-gray-600">
                      Analyzed on{" "}
                      {new Date(results.timestamp).toLocaleDateString()}
                    </p>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" onClick={handleExport}>
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleCopy}>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <AnalysisCard
                  title="Performance"
                  icon={Zap}
                  data={results.performance}
                  isExpanded={expandedSections.performance}
                  onToggle={() => toggleSection("performance")}
                />
                <AnalysisCard
                  title="SEO"
                  icon={Search}
                  data={results.seo}
                  isExpanded={expandedSections.seo}
                  onToggle={() => toggleSection("seo")}
                />
                <AnalysisCard
                  title="Accessibility"
                  icon={Eye}
                  data={results.accessibility}
                  isExpanded={expandedSections.accessibility}
                  onToggle={() => toggleSection("accessibility")}
                />
                <AnalysisCard
                  title="Best Practices"
                  icon={Shield}
                  data={results.bestPractices}
                  isExpanded={expandedSections.bestPractices}
                  onToggle={() => toggleSection("bestPractices")}
                />
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Globe className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-lg font-semibold">SiteScan</span>
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 SiteScan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}