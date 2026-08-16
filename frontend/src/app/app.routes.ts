import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'TechnoCop Energy Co. | TechnoPlus LED Solar Light',
    data: { description: 'TechnoCop Energy Co. manufactures solar street lights, high mast lights, flood lights and solar water pumping systems across India. Trusted by 1000+ clients and 5000+ projects.' },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | TechnoCop Energy Co.',
    data: { description: 'Learn about TechnoCop Energy Co. — our mission, vision, core values, and 8+ years of experience delivering solar lighting solutions across 20+ Indian states.' },
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then((m) => m.ProductsComponent),
    title: 'Products & Solutions | TechnoCop Energy Co.',
    data: { description: 'Explore our full range: Solar Street Lights, High Mast Lights, Solar Flood Lights, Solar Water Pumping Systems, and more solar lighting solutions.' },
  },
  {
    path: 'products/:slug',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
    title: 'Product Details | TechnoCop Energy Co.',
    data: { description: 'Detailed specifications, features, applications and installation guide for TechnoCop Energy Co. solar lighting products.' },
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'Projects & Clients | TechnoCop Energy Co.',
    data: { description: 'See TechnoCop Energy Co.\'s installations nationwide and the government, PSU and industrial clients who trust our solar lighting solutions.' },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us | TechnoCop Energy Co.',
    data: { description: 'Get in touch with TechnoCop Energy Co. for a customized solar lighting quote. Call, email, or send an enquiry directly through our website.' },
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then((m) => m.AdminComponent),
    title: 'Admin | TechnoCop Energy Co.',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page Not Found | TechnoCop Energy Co.',
  },
];
