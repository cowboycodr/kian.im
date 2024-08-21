import Link from 'next/link';

import { Github } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Nav() {
    return (
        <header className="sticky top-0 bg-background">
            <div className="container max-w-[1080px] flex items-center justify-between py-6">
                <div>
                    <p className="font-medium text-lg">
                        Kian McKenna
                    </p>
                </div>
                <div className="text-muted-foreground">
                    <Link href="https://github.com/cowboycodr/" target="_blank" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
                        <Github className="h-[1.2rem] w-[1.rem]"></Github>
                    </Link>
                </div>
            </div>
        </header>
    )
}