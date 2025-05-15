
import type { LucideIcon } from 'lucide-react';
import { Database, GitFork, Container, Cloud, Settings, Terminal, Zap, LineChart, Users, Layers, Rocket, Workflow, ShieldCheck } from 'lucide-react';

export interface ToolUseCase {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface Tool {
  name: string;
  slug: string;
  logoUrl: string;
  logoAiHint: string;
  tagline: string;
  description:string;
  useCases: ToolUseCase[];
  website: string;
}

export const tools: Tool[] = [
  {
    name: 'Docker',
    slug: 'docker',
    logoUrl: 'https://placehold.co/200x100.png',
    logoAiHint: 'docker whale',
    tagline: 'Build, Ship, and Run Any App, Anywhere',
    description: 'Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.',
    useCases: [
      { title: 'Microservices', description: 'Package and deploy individual microservices independently.', icon: Layers },
      { title: 'Consistent Environments', description: 'Ensure development, testing, and production environments are identical.', icon: Settings },
      { title: 'CI/CD Pipelines', description: 'Integrate with CI/CD tools to automate build, test, and deployment processes.', icon: Workflow },
    ],
    website: 'https://www.docker.com/',
  },
  {
    name: 'Kubernetes',
    slug: 'kubernetes',
    logoUrl: 'https://placehold.co/200x100.png',
    logoAiHint: 'kubernetes helm',
    tagline: 'Orchestrating the Cloud Native Landscape',
    description: 'Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.',
    useCases: [
      { title: 'Container Orchestration', description: 'Automate the deployment, scaling, and operations of application containers.', icon: Container },
      { title: 'Autoscaling Applications', description: 'Automatically scale applications up or down based on demand.', icon: LineChart },
      { title: 'Service Discovery & Load Balancing', description: 'Expose containers using DNS names or IP addresses and load balance traffic.', icon: Zap },
    ],
    website: 'https://kubernetes.io/',
  },
  {
    name: 'Jenkins',
    slug: 'jenkins',
    logoUrl: 'https://placehold.co/200x100.png',
    logoAiHint: 'jenkins butler',
    tagline: 'The Leading Open Source Automation Server',
    description: 'Jenkins is an open source automation server which enables developers around the world to reliably build, test, and deploy their software.',
    useCases: [
      { title: 'Continuous Integration', description: 'Automate the building and testing of code every time a change is committed.', icon: Workflow },
      { title: 'Continuous Deployment', description: 'Automate the deployment of applications to various environments.', icon: Rocket },
      { title: 'Automated Testing', description: 'Run automated tests as part of the build process to catch issues early.', icon: ShieldCheck },
    ],
    website: 'https://www.jenkins.io/',
  },
  {
    name: 'Ansible',
    slug: 'ansible',
    logoUrl: 'https://placehold.co/200x100.png',
    logoAiHint: 'ansible symbol',
    tagline: 'Simple, Agentless IT Automation',
    description: 'Ansible is an open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code.',
    useCases: [
      { title: 'Configuration Management', description: 'Maintain consistency across multiple servers by defining their state.', icon: Settings },
      { title: 'Application Deployment', description: 'Automate the deployment of applications to servers or cloud instances.', icon: Rocket },
      { title: 'Orchestration', description: 'Coordinate complex tasks across multiple systems.', icon: Users },
    ],
    website: 'https://www.ansible.com/',
  },
  {
    name: 'Terraform',
    slug: 'terraform',
    logoUrl: 'https://placehold.co/200x100.png',
    logoAiHint: 'terraform symbol',
    tagline: 'Write, Plan, and Create Infrastructure as Code',
    description: 'Terraform is an open-source infrastructure as code software tool that enables you to safely and predictably create, change, and improve infrastructure.',
    useCases: [
      { title: 'Infrastructure as Code', description: 'Define and provision infrastructure using a declarative configuration language.', icon: Cloud },
      { title: 'Multi-Cloud Deployment', description: 'Manage infrastructure across multiple cloud providers with a unified workflow.', icon: Layers },
      { title: 'Resource Management', description: 'Track resource state and manage the lifecycle of infrastructure components.', icon: Database },
    ],
    website: 'https://www.terraform.io/',
  },
  {
    name: 'Git',
    slug: 'git',
    logoUrl: 'https://placehold.co/200x100.png',
    logoAiHint: 'git icon',
    tagline: 'Distributed Version Control System',
    description: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    useCases: [
      { title: 'Version Control', description: 'Track changes to source code and other files over time.', icon: GitFork },
      { title: 'Branching and Merging', description: 'Work on different features or fixes in isolation and merge them back.', icon: GitFork },
      { title: 'Collaboration', description: 'Enable multiple developers to work on the same project concurrently.', icon: Users },
    ],
    website: 'https://git-scm.com/',
  },
  {
    name: 'Prometheus',
    slug: 'prometheus',
    logoUrl: 'https://placehold.co/200x100.png',
    logoAiHint: 'prometheus flame',
    tagline: 'From Metrics to Insight',
    description: 'Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud.',
    useCases: [
      { title: 'Metrics Collection', description: 'Collect time-series data by pulling metrics from configured targets.', icon: LineChart },
      { title: 'Alerting', description: 'Define alert rules based on Prometheus expression language and send notifications.', icon: Zap },
      { title: 'Service Monitoring', description: 'Monitor the health and performance of microservices and other applications.', icon: Terminal },
    ],
    website: 'https://prometheus.io/',
  },
];
