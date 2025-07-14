'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { signUpUser } from "@/lib/actions/user.actions";

const SignUpForm = () => {
    const [data, action] = useActionState(signUpUser, {
        success: false,
        message: ''
    }) 

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const SignUpButton = () => {
        const {pending} = useFormStatus();

        return (
            <Button className="w-full cursor-pointer" variant="default" disabled={pending}>
                { pending ? "Signin Up..." : "Sign Up" }
            </Button>
        )
    }

    return ( 
        <form action={action}>
            <input type="hidden" name="callbackUrl" value={callbackUrl}/>
            <div className="space-y-6">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                    id="name" 
                    name="name"
                    type="text"
                    autoComplete="text"
                    defaultValue={signUpDefaultValues.name}
                    />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                    id="email" 
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    defaultValue={signUpDefaultValues.email}
                    />
                </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                    id="password" 
                    name="password"
                    type="password"
                    required
                    autoComplete="password"
                    defaultValue={signUpDefaultValues.password}
                    />
                </div>
                 <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input 
                    id="confirmPassword" 
                    name="confirmPassword"
                    type="password"
                    required
                    autoComplete="confirmPassword"
                    defaultValue={signUpDefaultValues.confirmPassword}
                    />
                </div>
                <div>
                    <SignUpButton />
                </div>
                { data && !data.success && (
                    <div className="text-center text-destructive">{data.message}</div>
                )}
                <div className="text-sm text-center text-muted-foreground">
                    Already have an account?{' '}
                    <Link href="/signin" target="_self" className="underline">
                    Sign In
                    </Link>
                </div>
            </div>
        </form>
     );
}
 
export default SignUpForm;