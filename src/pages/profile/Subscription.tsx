import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Check,
  Crown,
  TrendingUp,
  Calendar,
  Sparkles,
  Zap,
  Shield,
  Gift,
} from "lucide-react";
import { toast } from "sonner";

interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  icon: any;
  color: string;
  badge?: string;
  features: string[];
  revenue?: number;
  reinvestment?: number;
  description: string;
  popular?: boolean;
  isFree?: boolean;
}

const Subscription = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      id: "free",
      name: "Free Plan",
      price: 0,
      period: "forever",
      icon: Gift,
      color: "muted",
      isFree: true,
      features: [
        "Budget Tracker",
        "Basic Reward System (limited scratch cards)",
        "Basic Learning Modules",
        "Parent Monitoring (limited view)",
        "Can start 1 SIP goal only",
        "Limited rewards",
        "Basic analytics",
      ],
      description: "Perfect for getting started. Try all basic features for free!",
    },
    {
      id: "monthly",
      name: "Monthly Plan",
      price: 49,
      period: "month",
      icon: Calendar,
      color: "primary",
      features: [
        "Teen Smart Card (Virtual + Physical)",
        "Unlimited SIP Investments",
        "Multi-Instrument Investing (MF, Gold, RD, FD, Bonds, etc.)",
        "Investment Auto-Optimization",
        "Advanced Budgeting & Analytics",
        "Unlimited Rewards & Challenges",
        "Premium Learning Content",
        "AI Finance Coaching",
        "Investment Advisory",
        "Parent Detailed Analytics",
        "Personalized Insights",
        "Auto-renew every month",
        "No reinvestment required",
        "Full ₹49 = revenue",
        "Cancel anytime",
      ],
      revenue: 49,
      description: "Perfect for trying out Finzo. Pay monthly with no commitment.",
    },
    {
      id: "yearly",
      name: "Yearly Plan",
      price: 499,
      period: "year",
      icon: TrendingUp,
      color: "success",
      badge: "Best Value",
      popular: true,
      features: [
        "Teen Smart Card (Virtual + Physical)",
        "Unlimited SIP Investments",
        "Multi-Instrument Investing (MF, Gold, RD, FD, Bonds, Index Funds, Govt Schemes, ULIP)",
        "Investment Auto-Optimization (Smart asset allocation, Rebalancing, Portfolio health)",
        "Advanced Budgeting & Premium Analytics",
        "Unlimited Rewards & All Challenges",
        "Premium Learning Content",
        "AI Finance & Wealth Advisor",
        "Investment Advisory",
        "Parent Detailed Analytics",
        "Personalized Insights",
        "Wealth Projections & Calculators",
        "Better Rewards & Higher Multipliers",
        "Paid upfront - save more",
        "₹51 automatically reinvested as micro-SIP",
        "₹448 = revenue",
        "Earn SIP commission + float income",
        "Best value for money",
      ],
      revenue: 448,
      reinvestment: 51,
      description: "Get the best value with yearly subscription and automatic reinvestment.",
    },
    {
      id: "premium",
      name: "Premium Advisory Plan",
      price: 599,
      period: "6 months",
      icon: Crown,
      color: "accent",
      badge: "Premium",
      features: [
        "Teen Smart Card (Virtual + Physical)",
        "Unlimited SIP Investments",
        "Multi-Instrument Investing (All instruments + Blue-chip stocks for 18+)",
        "Investment Auto-Optimization (Advanced)",
        "Advanced Budgeting & Premium Analytics",
        "Unlimited Rewards & All Challenges",
        "Premium Learning Content",
        "AI Finance & Wealth Advisor (Advanced)",
        "Exclusive Investment Advisory",
        "Parent Detailed Analytics (Full access)",
        "Personalized Insights (Advanced)",
        "Wealth Projections & Advanced Calculators",
        "Best Rewards & Highest Multipliers",
        "Priority Customer Support",
        "Renew every 6 months",
        "₹249 reinvested as mandatory SIP",
        "₹350 = revenue per 6 months",
        "SIP Commission on ₹249",
        "Float Interest Income on ₹249",
        "High ARPU (₹700/year revenue)",
        "Exclusive advisory features",
      ],
      revenue: 350,
      reinvestment: 249,
      description: "Premium plan with exclusive advisory support and maximum reinvestment benefits.",
    },
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    const plan = plans.find((p) => p.id === planId);
    if (plan) {
      if (plan.isFree) {
        toast.success(`Free Plan Activated!`, {
          description: "You now have access to all free features.",
        });
      } else {
        toast.success(`Selected ${plan.name}!`, {
          description: `Proceeding to payment for ₹${plan.price}/${plan.period}`,
        });
        // In production, navigate to payment page
        setTimeout(() => {
          toast.info("Payment integration coming soon!");
        }, 1500);
      }
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="gradient-primary p-6 rounded-b-3xl mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-primary-foreground mb-1">
              Choose Your Plan
            </h1>
            <p className="text-primary-foreground/80 text-sm">
              Select the perfect plan for your financial journey
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 space-y-6">
        {/* Current Plan Info */}
        <Card className="p-4 gradient-card border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Current Plan</p>
              <p className="font-semibold">Premium Advisory Plan</p>
              <p className="text-xs text-muted-foreground">Renews on Jan 15, 2025</p>
            </div>
            <Badge variant="secondary" className="bg-accent/10 text-accent">
              <Crown className="w-3 h-3 mr-1" />
              Active
            </Badge>
          </div>
        </Card>

        {/* Plans Grid */}
        <div className="space-y-4">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;

            return (
              <Card
                key={plan.id}
                className={`
                  relative p-6 transition-all duration-300
                  ${plan.popular ? "border-2 border-primary shadow-lg" : "border"}
                  ${isSelected ? "ring-2 ring-primary ring-offset-2" : ""}
                  hover:shadow-xl hover:scale-[1.02]
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                {plan.badge && !plan.popular && (
                  <div className="absolute -top-3 right-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Plan Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`
                          w-12 h-12 rounded-xl flex items-center justify-center
                          ${plan.color === "primary" ? "bg-primary/10" : ""}
                          ${plan.color === "success" ? "bg-success/10" : ""}
                          ${plan.color === "accent" ? "bg-accent/10" : ""}
                          ${plan.color === "muted" ? "bg-muted" : ""}
                        `}
                      >
                        <Icon
                          className={`
                            w-6 h-6
                            ${plan.color === "primary" ? "text-primary" : ""}
                            ${plan.color === "success" ? "text-success" : ""}
                            ${plan.color === "accent" ? "text-accent" : ""}
                            ${plan.color === "muted" ? "text-muted-foreground" : ""}
                          `}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2">
                    {plan.isFree ? (
                      <>
                        <span className="text-3xl font-extrabold">Free</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-3xl font-extrabold">
                          {formatCurrency(plan.price)}
                        </span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </>
                    )}
                  </div>

                  {/* Revenue Breakdown */}
                  {!plan.isFree && plan.revenue && (
                    <div className="space-y-2 p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Revenue:</span>
                        <span className="font-semibold text-success">
                          {formatCurrency(plan.revenue)}
                        </span>
                      </div>
                      {plan.reinvestment && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Reinvestment:</span>
                          <span className="font-semibold text-primary">
                            {formatCurrency(plan.reinvestment)}
                          </span>
                        </div>
                      )}
                      {plan.reinvestment && (
                        <div className="pt-2 border-t border-border">
                          <p className="text-xs text-muted-foreground">
                            {plan.reinvestment === 51
                              ? "₹51 becomes a micro-SIP. You earn SIP commission + float income."
                              : "₹249 reinvested as mandatory SIP. Earn SIP commission + float interest income."}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Features */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">What's included:</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleSelectPlan(plan.id)}
                    className={`w-full rounded-full ${
                      plan.isFree
                        ? "bg-muted hover:bg-muted/80"
                        : plan.popular
                        ? "bg-primary hover:bg-primary/90"
                        : plan.id === "premium"
                        ? "bg-accent hover:bg-accent/90"
                        : ""
                    }`}
                    variant={
                      plan.isFree
                        ? "secondary"
                        : plan.popular
                        ? "default"
                        : plan.id === "premium"
                        ? "default"
                        : "outline"
                    }
                    size="lg"
                  >
                    {isSelected
                      ? "Selected"
                      : plan.isFree
                      ? "Continue with Free"
                      : `Choose ${plan.name}`}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Benefits Info */}
        <Card className="p-6 gradient-card">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold mb-1">Why Choose Finzo Plans?</h3>
              <p className="text-sm text-muted-foreground">
                All plans include secure payments, 24/7 support, and access to our financial tools.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-warning" />
              <span className="text-xs">Instant Activation</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-success" />
              <span className="text-xs">Reward Points</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-xs">Growth Focused</span>
            </div>
          </div>
        </Card>

        {/* Feature Comparison Table */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Free vs Paid Features Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Feature</th>
                  <th className="text-center p-2 font-semibold">Free Users</th>
                  <th className="text-center p-2 font-semibold text-primary">Paid Users</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-2">Teen Card</td>
                  <td className="p-2 text-center text-destructive">❌ No</td>
                  <td className="p-2 text-center text-success">✔ Yes</td>
                </tr>
                <tr>
                  <td className="p-2">Unlimited SIPs</td>
                  <td className="p-2 text-center text-destructive">❌ No (1 only)</td>
                  <td className="p-2 text-center text-success">✔ Yes</td>
                </tr>
                <tr>
                  <td className="p-2">Advanced Budgeting</td>
                  <td className="p-2 text-center text-destructive">❌ No</td>
                  <td className="p-2 text-center text-success">✔ Yes</td>
                </tr>
                <tr>
                  <td className="p-2">Premium Learning</td>
                  <td className="p-2 text-center text-destructive">❌ No</td>
                  <td className="p-2 text-center text-success">✔ Yes</td>
                </tr>
                <tr>
                  <td className="p-2">Unlimited Rewards</td>
                  <td className="p-2 text-center text-muted-foreground">⚠ Limited</td>
                  <td className="p-2 text-center text-success">✔ Full</td>
                </tr>
                <tr>
                  <td className="p-2">AI Finance Coaching</td>
                  <td className="p-2 text-center text-destructive">❌ No</td>
                  <td className="p-2 text-center text-success">✔ Yes</td>
                </tr>
                <tr>
                  <td className="p-2">Investment Advisory</td>
                  <td className="p-2 text-center text-destructive">❌ No</td>
                  <td className="p-2 text-center text-success">✔ Yes</td>
                </tr>
                <tr>
                  <td className="p-2">Parent Detailed Analytics</td>
                  <td className="p-2 text-center text-destructive">❌ No</td>
                  <td className="p-2 text-center text-success">✔ Yes</td>
                </tr>
                <tr>
                  <td className="p-2">All Challenges</td>
                  <td className="p-2 text-center text-muted-foreground">⚠ Limited</td>
                  <td className="p-2 text-center text-success">✔ Unlimited</td>
                </tr>
                <tr>
                  <td className="p-2">Personalized Insights</td>
                  <td className="p-2 text-center text-destructive">❌ No</td>
                  <td className="p-2 text-center text-success">✔ Yes</td>
                </tr>
                <tr>
                  <td className="p-2">Multi-Instrument Investing</td>
                  <td className="p-2 text-center text-destructive">❌ No</td>
                  <td className="p-2 text-center text-success">✔ Yes</td>
                </tr>
                <tr>
                  <td className="p-2">Investment Auto-Optimization</td>
                  <td className="p-2 text-center text-destructive">❌ No</td>
                  <td className="p-2 text-center text-success">✔ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* FAQ */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium mb-1">What is reinvestment?</p>
              <p className="text-muted-foreground">
                Reinvestment means a portion of your payment is automatically invested in a SIP,
                helping you grow your money while using the platform.
              </p>
            </div>
            <div>
              <p className="font-medium mb-1">Can I cancel anytime?</p>
              <p className="text-muted-foreground">
                Yes! Monthly plans can be cancelled anytime. Yearly and Premium plans can be
                cancelled, but refunds follow our policy.
              </p>
            </div>
            <div>
              <p className="font-medium mb-1">How does SIP commission work?</p>
              <p className="text-muted-foreground">
                When your reinvestment amount is used for SIP, you earn commission on that
                investment, creating additional value.
              </p>
            </div>
            <div>
              <p className="font-medium mb-1">What is Teen Smart Card?</p>
              <p className="text-muted-foreground">
                Teen Smart Card is a physical + virtual card that allows spending anywhere via UPI
                and card, with category-based controls, parental controls, and instant notifications.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Subscription;

