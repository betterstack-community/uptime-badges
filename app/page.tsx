import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Cloud, Code2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Supercharge Your Development Stack
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Better Demo provides cutting-edge tools and infrastructure to
                help you build, deploy, and scale your applications faster.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Our Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border-border p-4 rounded-lg">
              <Cloud className="h-10 w-10 mb-2" />
              <h3 className="text-xl font-bold">Cloud Infrastructure</h3>
              <p className="text-sm text-muted-foreground text-center">
                Scalable and reliable cloud solutions for your applications.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-border p-4 rounded-lg">
              <Code2 className="h-10 w-10 mb-2" />
              <h3 className="text-xl font-bold">Developer Tools</h3>
              <p className="text-sm text-muted-foreground text-center">
                Powerful tools to streamline your development workflow.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-border p-4 rounded-lg">
              <BarChart2 className="h-10 w-10 mb-2" />
              <h3 className="text-xl font-bold">Analytics & Insights</h3>
              <p className="text-sm text-muted-foreground text-center">
                Gain valuable insights into your application&apos;s performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Client"
                className="rounded-full"
                height={100}
                width={100}
              />
              <p className="text-sm text-muted-foreground text-center italic">
                &quot;Better Demo has revolutionized our development process.
                We&apos;ve seen a 50% increase in productivity.&quot;
              </p>
              <p className="text-sm font-bold">Jane Doe, CTO at TechCorp</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Client"
                className="rounded-full"
                height={100}
                width={100}
              />
              <p className="text-sm text-muted-foreground text-center italic">
                &quot;The cloud infrastructure provided by Better Demo is
                unmatched. It&apos;s reliable, scalable, and
                cost-effective.&quot;
              </p>
              <p className="text-sm font-bold">
                John Smith, CEO at CloudSolutions
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Client"
                className="rounded-full"
                height={100}
                width={100}
              />
              <p className="text-sm text-muted-foreground text-center italic">
                &quot;The analytics tools have given us insights we never had
                before. It&apos;s changed how we make decisions.&quot;
              </p>
              <p className="text-sm font-bold">
                Emily Brown, CIO at DataDriven
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of developers and companies who are already using
                Better Demo to improve their development process.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg">Sign Up Now</Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
