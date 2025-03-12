import { Meta, StoryObj } from '@storybook/react';
import { DecodeLogo, DecodeLogoFull } from "@/package/ui/assets/svg";
import { Select, SelectTrigger, SelectValue } from "@/package/ui/components/ui/select";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/package/ui/components/ui/sidebar"
import { CalendarDaysIcon, CalendarX, Clipboard, LayoutDashboardIcon, LucideFileSpreadsheet, Newspaper } from "lucide-react";

const main = [
    {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboardIcon,
    },
    {
        title: "Actualités",
        url: "#",
        icon: Newspaper,
    },
];

const scolarity = [
    {
        title: "Calendrier",
        url: "#",
        icon: CalendarDaysIcon,
    },
    {
        title: "Absences",
        url: "#",
        icon: CalendarX,
    },
    {
        title: "Evaluations",
        url: "#",
        icon: Clipboard,
    },
    {
        title: "Cours",
        url: "#",
        icon: LucideFileSpreadsheet,
    },
];


const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
};


export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ...args }) => (
        <SidebarProvider>
            <Sidebar {...args}>
                <SidebarHeader>
                    <div className="py-6 overflow-hidden">
                        <DecodeLogoFull className="w-48 h-16 group-data-[state=collapsed]:w-32 transition-all" />
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Promotion seléctionnée</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <Select disabled>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choose a year" />
                                </SelectTrigger>
                                <SelectValue>2025-2026</SelectValue>
                                <SelectValue>2024-2025</SelectValue>
                            </Select>
                        </SidebarGroupContent>
                    </SidebarGroup>
                    <SidebarGroup>
                        <SidebarGroupLabel>Principale</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {main.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton isActive asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                    <SidebarGroup>
                        <SidebarGroupLabel>Pédagogie</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {scolarity.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
            <main>
                <SidebarTrigger />
            </main>
        </SidebarProvider>
    ),
    args: {
        collapsible: 'icon',
        side: 'left',
    }
};
