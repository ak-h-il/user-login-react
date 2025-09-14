import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, UserPlus, LogIn, Smartphone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Secure Authentication
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience seamless and secure user authentication with OTP verification, 
              role-based access, and modern design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-12 px-8">
                <Link to="/register">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Get Started
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <Link to="/login">
                  <LogIn className="mr-2 h-5 w-5" />
                  Sign In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose Our Authentication?
          </h2>
          <p className="text-lg text-muted-foreground">
            Built with modern security practices and user experience in mind
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Secure by Design</CardTitle>
              <CardDescription>
                Built with industry-standard security practices and encryption
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• JWT-based authentication</li>
                <li>• Secure password hashing</li>
                <li>• Protected routes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>OTP Verification</CardTitle>
              <CardDescription>
                Email-based OTP verification for enhanced security
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• 6-digit verification codes</li>
                <li>• Email delivery system</li>
                <li>• Time-limited codes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Role-Based Access</CardTitle>
              <CardDescription>
                Flexible role management for different user types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Multiple user roles</li>
                <li>• Permission-based access</li>
                <li>• Scalable architecture</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted/50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Create your account today and experience secure authentication
          </p>
          <Button asChild size="lg" className="h-12 px-8">
            <Link to="/register">
              <UserPlus className="mr-2 h-5 w-5" />
              Create Account
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
