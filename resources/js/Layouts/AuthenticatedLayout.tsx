import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar"
import { AppSidebar } from "@/Components/dashboard/app-sidebar"
import { ThemeProvider } from "@/Components/theme-provider"
import { Separator } from "@/Components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import { usePage } from "@inertiajs/react";
import { ModeToggle } from "@/Components/mode-toggle";

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
        <SidebarProvider>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <AppSidebar />
                <SidebarInset>
                    <header className="flex z-50 sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                {pathnames.map((name, index) => {
                                    const isLast = index === pathnames.length - 1;
                                    return (
                                        <BreadcrumbList key={index}>
                                            <BreadcrumbItem>
                                                {!isLast ? (
                                                    <BreadcrumbLink className="capitalize" href={`/${pathnames.slice(0, index + 1).join('/')}`}>
                                                        {name}
                                                    </BreadcrumbLink>
                                                ) : (
                                                    <BreadcrumbPage className="capitalize">{name}</BreadcrumbPage>
                                                )}
                                            </BreadcrumbItem>
                                            {!isLast && <BreadcrumbSeparator />}
                                        </BreadcrumbList>
                                    );
                                })}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </header>
                    {children}
                </SidebarInset>
            </ThemeProvider>
        </SidebarProvider>
    );
}
