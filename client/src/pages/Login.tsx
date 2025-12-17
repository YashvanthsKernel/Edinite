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

        <div className="relative w-full max-w-4xl mx-auto h-[550px]">
          <Card className="w-full h-full backdrop-blur-xl bg-card/95 border-primary/20 shadow-[0_8px_32px_0_rgba(114,38,255,0.15)] overflow-hidden">
            <div className="flex h-full relative">
              {/* Left Section - Sign In Form */}
              <div className="w-1/2 h-full flex items-center justify-center px-8 py-6">
                <div className="w-full max-w-xs">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Sign In</h2>
                    <p className="text-sm text-muted-foreground mt-1">or use your account</p>
                  </div>
                  
                  <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                      <FormField
                        control={loginForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                  {...field}
                                  type="email"
                                  placeholder="you@example.com"
                                  className="pl-10 h-9 bg-background/50 border-primary/30 focus:border-primary rounded-lg"
                                  data-testid="input-email-signin"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                  {...field}
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Enter your password"
                                  className="pl-10 pr-10 h-9 bg-background/50 border-primary/30 focus:border-primary rounded-lg"
                                  data-testid="input-password-signin"
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground transition-colors"
                                  data-testid="button-toggle-password-signin"
                                >
                                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex items-center justify-between">
                        <FormField
                          control={loginForm.control}
                          name="rememberMe"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  data-testid="checkbox-remember"
                                />
                              </FormControl>
                              <FormLabel className="text-xs font-normal cursor-pointer">
                                Remember me
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                        <Link href="/forgot-password">
                          <span className="text-xs text-primary hover:text-primary/80 transition-colors cursor-pointer font-medium" data-testid="link-forgot-password">
                            Forgot password?
                          </span>
                        </Link>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-9 mt-4 rounded-full font-medium"
                        disabled={isLoading}
                        data-testid="button-login"
                      >
                        {isLoading ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            Signing in...
                          </span>
                        ) : (
                          "SIGN IN"
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>

              {/* Right Section - Sign Up Form */}
              <div className="w-1/2 h-full flex items-center justify-center px-8 py-6">
                <div className="w-full max-w-xs">
                  <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold text-foreground">Create Account</h2>
                    <p className="text-sm text-muted-foreground mt-1">or use your email for registration</p>
                  </div>
                  
                  <Form {...signupForm}>
                    <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-3">
                      <FormField
                        control={signupForm.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Full Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                  {...field}
                                  placeholder="John Doe"
                                  className="pl-10 h-9 bg-background/50 border-primary/30 focus:border-primary rounded-lg"
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
                                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                  {...field}
                                  type="email"
                                  placeholder="you@example.com"
                                  className="pl-10 h-9 bg-background/50 border-primary/30 focus:border-primary rounded-lg"
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
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                  {...field}
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Create a password"
                                  className="pl-10 pr-10 h-9 bg-background/50 border-primary/30 focus:border-primary rounded-lg"
                                  data-testid="input-password-signup"
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground transition-colors"
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
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                  {...field}
                                  type={showConfirmPassword ? "text" : "password"}
                                  placeholder="Confirm your password"
                                  className="pl-10 pr-10 h-9 bg-background/50 border-primary/30 focus:border-primary rounded-lg"
                                  data-testid="input-confirm-password"
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                  className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground transition-colors"
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
                        className="w-full h-9 mt-3 rounded-full font-medium"
                        disabled={isLoading}
                        data-testid="button-signup"
                      >
                        {isLoading ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            Creating...
                          </span>
                        ) : (
                          "SIGN UP"
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>

              {/* Sliding Overlay Panel */}
              <motion.div
                initial={false}
                animate={{ x: isSignup ? "0%" : "100%" }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center p-8 text-center z-10"
                data-testid="div-overlay-panel"
              >
                <div className="space-y-6">
                  <motion.div
                    key={isSignup ? "signup-overlay" : "signin-overlay"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-primary-foreground leading-tight">
                      {isSignup ? "Welcome Back!" : "Hey There!"}
                    </h2>
                    <p className="text-base text-primary-foreground/90 mt-4 leading-relaxed">
                      {isSignup 
                        ? "Stay connected by logging in with your credentials and continue your experience."
                        : "Begin your amazing journey by creating an account with us today."
                      }
                    </p>
                  </motion.div>
                  <Button 
                    variant="outline" 
                    className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 font-medium"
                    onClick={() => setIsSignup(!isSignup)}
                    data-testid={isSignup ? "button-overlay-signin" : "button-overlay-signup"}
                  >
                    {isSignup ? "SIGN IN" : "SIGN UP"}
                  </Button>
                </div>
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
