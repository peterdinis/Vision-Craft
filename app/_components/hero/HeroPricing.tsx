import { Button } from "@/components/ui/button";
import { Check, CheckIcon } from "lucide-react";
import { FC } from "react";
import {Card} from "@/components/ui/card"

const HeroPricing: FC = () => {
    return (
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that's right for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-white dark:bg-gray-950 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-gray-500 dark:text-gray-400">Ideal for growing businesses and teams.</p>
                <div className="flex justify-center align-top gap-2">
                  <span className="text-4xl font-bold">$10</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Responsive design
                  </li>
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Customizable templates
                  </li>
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Advanced analytics
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Collaboration tools
                  </li>
                </ul>
                <Button>Get Started</Button>
              </div>
            </Card>
            <Card className="p-6 bg-white dark:bg-gray-950 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-gray-500 dark:text-gray-400">Ideal for growing businesses and teams.</p>
                <div className="flex justify-center align-top gap-2">
                  <span className="text-4xl font-bold">$22</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Responsive design
                  </li>
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Customizable templates
                  </li>
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Advanced analytics
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Collaboration tools
                  </li>
                </ul>
                <Button>Get Started</Button>
              </div>
            </Card>
            <Card className="p-6 bg-white dark:bg-gray-950 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tailored for large organizations and complex websites.
                </p>
                <div className="flex items-baseline gap-2" />
              </div>
            </Card>
          </div>
        </div>
      </section>
    )
}

export default HeroPricing