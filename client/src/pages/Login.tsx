import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, ArrowRight, Eye, EyeOff, User, Building2 } from "lucide-react";
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
      <ScrollingImageBackground />
      <FloatingOrbs />
      
      <div className="relative z-10 w-full max-w-5xl">
        <div className="text-center mb-8">
          <Link href="/">
            <img 
              src={logoImage} 
              alt="Edinite Logo" 
              className="h-16 w-auto mx-auto mb-4 cursor-pointer" 
              data-testid="img-logo"
            />
          </Link>
        </div>

        <div className="relative h-[600px] md:h-[550px]">
          <Card className="w-full h-full backdrop-blur-xl bg-card/50 border-primary/20 shadow-[0_8px_32px_0_rgba(114,38,255,0.15)] overflow-hidden">
            <div className="flex h-full relative">
              {/* Left Side - Sign In Form / Promo */}
              <motion.div
                animate={{ x: isSignup ? 0 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-1/2 flex items-center justify-center px-6 py-8"
              >
                {!isSignup ? (
                  <div className="w-full">
                    <CardHeader className="space-y-1 pb-4 px-0">
                      <CardTitle className="text-xl font-semibold text-center">Sign In</CardTitle>
                      <CardDescription className="text-center">
                        Enter your credentials to continue
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0">
                      <Form {...loginForm}>
                        <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-5">
                          <FormField
                            control={loginForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      {...field}
                                      type="email"
                                      placeholder="you@example.com"
                                      className="pl-10 bg-background/50 border-primary/30 focus:border-primary"
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
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      {...field}
                                      type={showPassword ? "text" : "password"}
                                      placeholder="Enter your password"
                                      className="pl-10 pr-10 bg-background/50 border-primary/30 focus:border-primary"
                                      data-testid="input-password-signin"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setShowPassword(!showPassword)}
                                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
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
                                  <FormLabel className="text-sm font-normal cursor-pointer">
                                    Remember me
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                            <Link href="/forgot-password">
                              <span className="text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer" data-testid="link-forgot-password">
                                Forgot password?
                              </span>
                            </Link>
                          </div>

                          <Button 
                            type="submit" 
                            className="w-full group"
                            disabled={isLoading}
                            data-testid="button-login"
                          >
                            {isLoading ? (
                              <span className="flex items-center gap-2">
                                <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                Signing in...
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                Sign In
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </span>
                            )}
                          </Button>
                        </form>
                      </Form>

                      <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-primary/20" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-3 bg-card text-muted-foreground">or continue with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Button 
                          variant="outline" 
                          className="border-primary/30 bg-background/50"
                          data-testid="button-google-signin"
                        >
                          <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Google
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-primary/30 bg-background/50"
                          data-testid="button-github-signin"
                        >
                          <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </Button>
                      </div>

                      <p className="text-center text-sm text-muted-foreground mt-6" data-testid="text-signup-prompt">
                        Don't have an account?{" "}
                        <button
                          onClick={() => setIsSignup(true)}
                          className="text-primary hover:text-primary/80 font-medium transition-colors cursor-pointer"
                          data-testid="button-to-signup"
                        >
                          Create one now
                        </button>
                      </p>
                    </CardContent>
                  </div>
                ) : (
                  <div className="w-full flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Welcome Back!</h2>
                    <p className="text-muted-foreground mb-8 text-sm">
                      Already connected to logging in with your credentials on login.
                    </p>
                    <Button 
                      variant="default"
                      className="border-primary-foreground/30"
                      onClick={() => setIsSignup(false)}
                      data-testid="button-left-promo-signin"
                    >
                      Sign In
                    </Button>
                  </div>
                )}
              </motion.div>

              {/* Divider */}
              <div className="w-px bg-primary/20" />

              {/* Right Side - Sign Up Form / Promo */}
              <motion.div
                animate={{ x: isSignup ? 0 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-1/2 flex items-center justify-center px-6 py-8"
              >
                {isSignup ? (
                  <div className="w-full max-h-[550px] overflow-y-auto">
                    <CardHeader className="space-y-1 pb-4 px-0">
                      <CardTitle className="text-xl font-semibold text-center">Create Account</CardTitle>
                      <CardDescription className="text-center">
                        Fill in your details to get started
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0">
                      <Form {...signupForm}>
                        <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
                          <FormField
                            control={signupForm.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      {...field}
                                      placeholder="John Doe"
                                      className="pl-10 bg-background/50 border-primary/30 focus:border-primary"
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
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      {...field}
                                      type="email"
                                      placeholder="you@example.com"
                                      className="pl-10 bg-background/50 border-primary/30 focus:border-primary"
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
                                <FormLabel>Company (Optional)</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      {...field}
                                      placeholder="Your company name"
                                      className="pl-10 bg-background/50 border-primary/30 focus:border-primary"
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
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      {...field}
                                      type={showPassword ? "text" : "password"}
                                      placeholder="Create a strong password"
                                      className="pl-10 pr-10 bg-background/50 border-primary/30 focus:border-primary"
                                      data-testid="input-password-signup"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setShowPassword(!showPassword)}
                                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                      data-testid="button-toggle-password-signup"
                                    >
                                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                  </div>
                                </FormControl>
                                {signupPassword && (
                                  <div className="space-y-2 mt-2">
                                    <div className="flex gap-1">
                                      {[1, 2, 3].map((level) => (
                                        <div
                                          key={level}
                                          className={`h-1 flex-1 rounded-full transition-colors ${
                                            level <= strengthScore
                                              ? strengthScore === 1
                                                ? "bg-destructive"
                                                : strengthScore === 2
                                                ? "bg-yellow-500"
                                                : "bg-green-500"
                                              : "bg-muted"
                                          }`}
                                        />
                                      ))}
                                    </div>
                                    <div className="text-xs space-y-1">
                                      <p className={passwordStrength.hasLength ? "text-green-500" : "text-muted-foreground"}>
                                        {passwordStrength.hasLength ? "✓" : "○"} At least 8 characters
                                      </p>
                                      <p className={passwordStrength.hasUppercase ? "text-green-500" : "text-muted-foreground"}>
                                        {passwordStrength.hasUppercase ? "✓" : "○"} One uppercase letter
                                      </p>
                                      <p className={passwordStrength.hasNumber ? "text-green-500" : "text-muted-foreground"}>
                                        {passwordStrength.hasNumber ? "✓" : "○"} One number
                                      </p>
                                    </div>
                                  </div>
                                )}
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={signupForm.control}
                            name="confirmPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      {...field}
                                      type={showConfirmPassword ? "text" : "password"}
                                      placeholder="Confirm your password"
                                      className="pl-10 pr-10 bg-background/50 border-primary/30 focus:border-primary"
                                      data-testid="input-confirm-password"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
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
                            className="w-full group mt-2"
                            disabled={isLoading}
                            data-testid="button-signup"
                          >
                            {isLoading ? (
                              <span className="flex items-center gap-2">
                                <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                Creating account...
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                Create Account
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </span>
                            )}
                          </Button>
                        </form>
                      </Form>

                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-primary/20" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-3 bg-card text-muted-foreground">or sign up with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Button 
                          variant="outline" 
                          className="border-primary/30 bg-background/50"
                          data-testid="button-google-signup"
                        >
                          <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Google
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-primary/30 bg-background/50"
                          data-testid="button-github-signup"
                        >
                          <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </Button>
                      </div>

                      <p className="text-center text-sm text-muted-foreground mt-4" data-testid="text-login-prompt">
                        Already have an account?{" "}
                        <button
                          onClick={() => setIsSignup(false)}
                          className="text-primary hover:text-primary/80 font-medium transition-colors cursor-pointer"
                          data-testid="button-to-signin"
                        >
                          Sign in here
                        </button>
                      </p>
                    </CardContent>
                  </div>
                ) : (
                  <div className="w-full flex flex-col items-center justify-center text-center bg-primary rounded-r-lg py-12 px-6" data-testid="div-promo-box">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-4">Hey There!</h2>
                    <p className="text-primary-foreground/90 mb-8 text-sm">
                      Enter your personal details and start your journey with us today. It only takes a few moments.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                      onClick={() => setIsSignup(true)}
                      data-testid="button-right-promo-signup"
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
