import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import TerminalWindow from "@/components/TerminalWindow";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, this would send the form data to a server
      // For now, we'll just simulate a successful form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default"
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-12 text-center">
          <span className="text-[#00ff00]">/</span>contact<span className="text-[#00ff00]">/</span>me<span className="text-[#00ff00]">;</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <TerminalWindow title="contact.sh">
            <div className="p-2 lg:p-6">
              <p className="text-[#00ff00] text-sm mb-6">[root@cybersec ~]$ ./contact_form.sh</p>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#00ff00] text-sm mb-2">Name:</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full bg-[#1a1a1a] border ${form.formState.errors.name ? 'border-red-500' : 'border-[#00ff00]/50 focus:border-[#00ff00]'} text-[#e0e0e0] py-2 px-3 rounded`}
                    placeholder="Enter your name"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#00ff00] text-sm mb-2">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full bg-[#1a1a1a] border ${form.formState.errors.email ? 'border-red-500' : 'border-[#00ff00]/50 focus:border-[#00ff00]'} text-[#e0e0e0] py-2 px-3 rounded`}
                    placeholder="Enter your email"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[#00ff00] text-sm mb-2">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full bg-[#1a1a1a] border ${form.formState.errors.subject ? 'border-red-500' : 'border-[#00ff00]/50 focus:border-[#00ff00]'} text-[#e0e0e0] py-2 px-3 rounded`}
                    placeholder="Message subject"
                    {...form.register("subject")}
                  />
                  {form.formState.errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#00ff00] text-sm mb-2">Message:</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full bg-[#1a1a1a] border ${form.formState.errors.message ? 'border-red-500' : 'border-[#00ff00]/50 focus:border-[#00ff00]'} text-[#e0e0e0] py-2 px-3 rounded`}
                    placeholder="Enter your message"
                    {...form.register("message")}
                  ></textarea>
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-[#00ff00] text-[#121212] hover:bg-[#0cbb52] transition-colors font-medium rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
              
              <div className="mt-10 pt-6 border-t border-[#00ff00]/30">
                <p className="text-[#00ff00] text-sm mb-4">[root@cybersec ~]$ cat ./contact_info.txt</p>
                
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Direct Contact</h3>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-center">
                        <i className="fas fa-envelope text-[#00ff00] mr-3"></i>
                        <a href="mailto:john.doe@example.com" className="hover:text-[#00ff00]">john.doe@example.com</a>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-phone text-[#00ff00] mr-3"></i>
                        <span>Available upon request</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 md:mt-0">
                    <h3 className="text-lg font-medium">Social Profiles</h3>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-center">
                        <i className="fab fa-github text-[#00ff00] mr-3"></i>
                        <a href="https://github.com/johndoe" className="hover:text-[#00ff00]">github.com/johndoe</a>
                      </li>
                      <li className="flex items-center">
                        <i className="fab fa-linkedin text-[#00ff00] mr-3"></i>
                        <a href="https://linkedin.com/in/johndoe" className="hover:text-[#00ff00]">linkedin.com/in/johndoe</a>
                      </li>
                      <li className="flex items-center">
                        <i className="fab fa-twitter text-[#00ff00] mr-3"></i>
                        <a href="https://twitter.com/johndoe" className="hover:text-[#00ff00]">twitter.com/johndoe</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
