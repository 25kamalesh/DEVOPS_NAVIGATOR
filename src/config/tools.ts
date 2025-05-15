
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
    logoUrl: 'data:image/jpeg;base64,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',
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
    logoUrl: '/images/tools/kubernetes_img.png',
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
    logoUrl: '/images/tools/jenkins_img.png',
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
    logoUrl: '/images/tools/Ansible_img_2.png',
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
    logoUrl:  '/images/tools/Terraform_img.png',
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
    logoUrl: '/images/tools/Git_img.png',
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
    logoUrl: '/images/tools/prometheus_img.png',
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
