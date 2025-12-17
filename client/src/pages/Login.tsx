import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, ArrowRight, Eye, EyeOff, User, Building2, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import logoImage from '@assets/Edinite Logo PNG_1764532314215.png';
import FloatingOrbs from "@/components/FloatingOrbs";
import ScrollingImageBackground from "@/components/ScrollingImageBackground";
import { motion } from "framer-motion";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

const signupSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  password: z.string().min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onLoginSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Login data:", data);
    setIsLoading(false);
  };

  const onSignupSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Signup data:", data);
    setIsLoading(false);
  };

  const signupPassword = signupForm.watch("password");
  const passwordStrength = {
    hasLength: signupPassword.length >= 8,
    hasUppercase: /[A-Z]/.test(signupPassword),
    hasNumber: /[0-9]/.test(signupPassword),
  };
  const strengthScore = Object.values(passwordStrength).filter(Boolean).length;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <ScrollingImageBackground />
      </div>
      <div className="absolute inset-0 opacity-15">
        <FloatingOrbs />
      </div>
      
      <div className="relative z-10 w-full max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              data-testid="button-back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/">
            <img 
              src={logoImage} 
              alt="Edinite Logo" 
              className="h-16 w-auto cursor-pointer" 
              data-testid="img-logo"
            />
          </Link>
          <div className="w-10" />
        </div>

        <div className="relative w-full max-w-4xl mx-auto h-[600px]">
          <Card className="w-full h-full backdrop-blur-xl bg-card/50 border-primary/20 shadow-[0_8px_32px_0_rgba(114,38,255,0.15)] overflow-hidden">
            <div className="flex h-full relative">
              {/* Form Sections Container */}
              <div className="w-full flex relative">
                {/* Right Section - Sign Up */}
                <motion.div
                  animate={{ x: isSignup ? "-100%" : "0%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full flex-shrink-0 flex items-center justify-center px-12 py-8"
                >
                  <div className="w-full max-w-sm">
                    <CardHeader className="space-y-2 pb-6 px-0">
                      <CardTitle className="text-3xl font-bold text-foreground">Create Account</CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        or register with email
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="px-0 max-h-[450px] overflow-y-auto">
                      <Form {...signupForm}>
                        <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
                          <FormField
                            control={signupForm.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium">Full Name</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      {...field}
                                      placeholder="John Doe"
                                      className="pl-10 h-10 bg-background/50 border-primary/30 focus:border-primary rounded-lg"
                                      data-testid="input-fullname"
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={signupForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      {...field}
                                      type="email"
                                      placeholder="you@example.com"
                                      className="pl-10 h-10 bg-background/50 border-primary/30 focus:border-primary rounded-lg"
                                      data-testid="input-email-signup"
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={signupForm.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium">Company <span className="text-xs text-muted-foreground font-normal">(optional)</span></FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      {...field}
                                      placeholder="Your company name"
                                      className="pl-10 h-10 bg-background/50 border-primary/30 focus:border-primary rounded-lg"
                                      data-testid="input-company"
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={signupForm.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium">Password</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      {...field}
                                      type={showPassword ? "text" : "password"}
                                      placeholder="Create a strong password"
                                      className="pl-10 pr-10 h-10 bg-background/50 border-primary/30 focus:border-primary rounded-lg"
                                      data-testid="input-password-signup"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setShowPassword(!showPassword)}
                                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                                      data-testid="button-toggle-password-signup"
                                    >
                                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={signupForm.control}
                            name="confirmPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium">Confirm Password</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      {...field}
                                      type={showConfirmPassword ? "text" : "password"}
                                      placeholder="Confirm your password"
                                      className="pl-10 pr-10 h-10 bg-background/50 border-primary/30 focus:border-primary rounded-lg"
                                      data-testid="input-confirm-password"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                                      data-testid="button-toggle-confirm-password"
                                    >
                                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button 
                            type="submit" 
                            className="w-full h-10 mt-6 rounded-lg font-medium"
                            disabled={isLoading}
                            data-testid="button-signup"
                          >
                            {isLoading ? (
                              <span className="flex items-center gap-2">
                                <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                Creating account...
                              </span>
                            ) : (
                              "Create Account"
                            )}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </div>
                </motion.div>
              </div>

              {/* Sliding Overlay Panel */}
              <motion.div
                animate={{ x: isSignup ? 0 : "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-primary to-purple-600 rounded-3xl flex items-center justify-center p-12 text-center"
                data-testid="div-overlay-panel"
              >
                <div className="space-y-8">
                  {!isSignup && (
                    <>
                      <h2 className="text-4xl font-bold text-primary-foreground leading-tight">Welcome Back!</h2>
                      <p className="text-lg text-primary-foreground/90">
                        Already connected to logging in with your credentials? Join us now.
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-lg font-medium"
                        onClick={() => setIsSignup(true)}
                        data-testid="button-overlay-signup"
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                  {isSignup && (
                    <>
                      <h2 className="text-4xl font-bold text-primary-foreground leading-tight">Hey There!</h2>
                      <p className="text-lg text-primary-foreground/90">
                        Enter your personal details and start your journey with us today.
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-lg font-medium"
                        onClick={() => setIsSignup(false)}
                        data-testid="button-overlay-signin"
                      >
                        Sign In
                      </Button>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
