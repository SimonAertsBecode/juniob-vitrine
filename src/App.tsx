import {
  Clock,
  Search,
  CheckCircle2,
  MessageSquare,
  Zap,
  Code2,
  Users,
  Building2,
  Mail,
  Euro,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Hero Section */}
      <header>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-nobackground-500.png" style={{ height: 150 }}></img>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 print:py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-content mb-6">
            Changing the Game for Junior Web Developer Hiring
          </h1>
          <p className="text-xl text-content/80 max-w-3xl mx-auto">
            Connect with pre-assessed junior developers and skip the lengthy
            technical assessment process. Find your perfect match faster than
            ever before.
          </p>
        </div>
      </div>

      {/* Our Approach Section */}
      <section className="py-12 bg-secondary/10 print:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-content mb-8">
            Our Unique Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-secondary/20 p-6 rounded-xl border border-primary/20">
              <Clock className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-content">
                Save Precious Time
              </h3>
              <p className="text-content/80">
                No more creating tests or waiting for results. Access
                pre-assessed developers instantly.
              </p>
            </div>
            <div className="bg-secondary/20 p-6 rounded-xl border border-primary/20">
              <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-content">
                Comprehensive Assessment
              </h3>
              <p className="text-content/80">
                Our technical assessment statements cover both fundamental and
                intermediate skills that matter in real-world jobs
              </p>
            </div>
            <div className="bg-secondary/20 p-6 rounded-xl border border-primary/20">
              <Code2 className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-content">
                See By Yourself
              </h3>
              <p className="text-content/80">
                Access and independently evaluate developers's technical
                assessment codebases
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 bg-background print:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-content mb-8">
            Key Benefits for Companies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "See Skills Instantly",
                description:
                  "No more waiting days to figure out if someone can code.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "The Full Picture",
                description:
                  "View projects, certifications, skills and much more in one place.",
              },
              {
                icon: <Search className="h-8 w-8 text-primary" />,
                title: "Smart Matching",
                description:
                  "Find perfect candidates without endless scrolling.",
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-primary" />,
                title: "Easy Communication",
                description:
                  "Send contact requests and start chatting when accepted.",
              },
              {
                icon: <Building2 className="h-8 w-8 text-primary" />,
                title: "Hire Way Faster",
                description:
                  "Cut hiring timeline by skipping technical assessments and endless browsing.",
              },
              {
                icon: <Euro className="h-8 w-8 text-primary" />,
                title: "Cost Cutting",
                description:
                  "Stop using third party services and manage the entire recruitment process internally",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-secondary/20 p-6 rounded-xl border border-primary/20"
              >
                {benefit.icon}
                <h3 className="text-xl font-semibold mt-3 mb-2 text-content">
                  {benefit.title}
                </h3>
                <p className="text-content/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-secondary/10 print:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-content mb-8">
            How It Works
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "One-Time Assessment",
                description:
                  "Developers complete our carefully designed technical evaluation when they sign up",
              },
              {
                step: "2",
                title: "Quick Search",
                description:
                  "Browse through pre-qualified developers using filters that matter to you",
              },
              {
                step: "3",
                title: "Reach Out",
                description:
                  'Send a "contact request" to developers who catch your eye',
              },
              {
                step: "4",
                title: "Direct Connection",
                description:
                  "Once they accept, you'll have access to their resume, personnal information, etc... And can start chatting directly",
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-content flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-content">
                    {step.title}
                  </h3>
                  <p className="text-content/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-secondary/20 print:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-content mb-4">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-content/80 text-xl mb-6">
            Join Juniob today and discover pre-assessed junior developers ready
            to contribute to your team.
          </p>
          <div className="flex items-center justify-center gap-2 text-content">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href="mailto:simonaerts@juniob.io"
              className="hover:text-primary transition-colors"
            >
              simonaerts@juniob.io
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-content/60 py-8 print:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-content">Juniob</span>
            </div>
            <p>© 2025 Juniob. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
