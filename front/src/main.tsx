import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n'; // Inicializar i18n
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Store/Home';
import ProductDetail from './pages/Store/ProductDetail';
import { Toaster } from "./components/ui/toaster";
import { LanguageProvider } from "./contexts/LanguageContext";
import notFoundRoute from "./routes/notFoundRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    // {
    //     path: '/about',
    //     element: <AboutPage />,
    // },
    // {
    //     path: '/contact',
    //     element: <Contact />,
    // },
    // {
    //     path:'/login',
    //     element: <StoreLogin />,
    // },
    // {
    //     path:'/register',
    //     element: <Register />,
    // },
    // {
    //     path: '/profile',
    //     element: <ProtectedRouteStore />,
    //     children: [
    //         {
    //             index: true,
    //             element: <Profile />,
    //         },
    //     ]
    // },
    // {
    //     path: '/orders',
    //     element: <ProtectedRouteStore />,
    //     children: [
    //         {
    //             index: true,
    //             element: <UserOrders />,
    //         },
    //     ]
    // },
    // {
    //     path: '/catalog',
    //     element: <ProductCatalogOptimized />,
    // },
    {
        path: '/product/:id',
        element: <ProductDetail />,
    },
    // {
    //     path: '/cart',
    //     element: <CartPage />,
    // },
    // {
    //     path: '/checkout',
    //     element: <Checkout />,
    // },
    // {
    //     path: '/checkout-guest',
    //     element: <CheckoutAsGuest />,
    // },
    // {
    //     path: '/payment/success',
    //     element: <PaymentSuccess />,
    // },
    // {
    //     path: '/payment/error',
    //     element: <PaymentError />,
    // },
    // {
    //     path: '/payment/processing',
    //     element: <PaymentProcessing />,
    // },
    // {
    //     path: '/order-summary',
    //     element: <StoreOrderSummary />,
    // },
    // {
    //     path: '/order/:orderId',
    //     element: <OrderView />,
    // },
    // {

    //     path: '/cms/home',
    //     element: <ProtectedRouteCMS />,
    //     children: [
    //         {
    //             index: true,
    //             element: <CMSHome />,
    //         },

    //     ],
    // },
    // {
    //     path: '/cms/products',
    //     element: <ProtectedRouteCMS />,
    //     children: [
    //         {
    //             path: 'list',
    //             element: <ProductsList/>
    //         },
    //         ],
    // },
    // {
    //     path: '/cms/categories',
    //     element: <ProtectedRouteCMS />,
    //     children: [
    //         {
    //             path: 'list',
    //             element: <CategoriesList/>
    //         },
    //         ],
    // },
    // {
    //     path: '/cms/orders',
    //     element: <ProtectedRouteCMS />,
    //     children: [
    //         {
    //             index: true,
    //             element: <OrderSummary/>
    //         },
    //         {
    //             path: 'list',
    //             element: <OrderList/>
    //         },
    //         ],
    // },
    // {
    //     path: '/cms/users',
    //     element: <ProtectedRouteCMS />,
    //     children: [
    //         {
    //             index: true,
    //             element: <UsersSummary/>
    //         },
    //         {
    //             path: 'list',
    //             element: <UsersList/>
    //         },
    //     ],
    // },
    // {
    //     path: '/cms/roles',
    //     element: <ProtectedRouteCMS />,
    //     children: [
    //         {
    //             index: true,
    //             element: <RolesClaimsDashboard/>
    //         },
    //         {
    //             path: 'list',
    //             element: <RolesList/>
    //         },
    //     ],
    // },
    // {
    //     path: '/cms/emails',
    //     element: <ProtectedRouteCMS />,
    //     children: [
    //         {
    //             index: true,
    //             element: <EmailDashboard/>
    //         },
    //         {
    //             path: 'send',
    //             element: <SendEmailPage/>
    //         },
    //     ],
    // },
    // {
    //     path: '/cms/discount-codes',
    //     element: <ProtectedRouteCMS />,
    //     children: [
    //         {
    //             index: true,
    //             element: <DiscountCodesListPage/>
    //         },
    //         {
    //             path: 'create',
    //             element: <CreateDiscountCodePage/>
    //         },
    //         {
    //             path: 'create-user',
    //             element: <CreateDiscountCodeUserPage/>
    //         },
    //         {
    //             path: 'create-product',
    //             element: <CreateDiscountCodeProductPage/>
    //         },
    //         {
    //             path: 'stats',
    //             element: <DiscountCodesStatsPage/>
    //         },
    //     ],
    // },
    // {
    //     path: '/cms/invoices',
    //     element: <ProtectedRouteCMS />,
    //     children: [
    //         {
    //             index: true,
    //             element: <InvoiceDownloadPage/>
    //         },
    //     ],
    // },
    // {
    //     path: '/cms/analytics',
    //     element: <ProtectedRouteCMS />,
    //     children: [
    //         {
    //             index: true,
    //             element: <AnalyticsDashboard />
    //         },
    //     ],
    // },

    // {
    //     path: '/cms/login',
    //     element: <CMSLogin />,
    // },
    notFoundRoute,
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <LanguageProvider>
            <Toaster position={"bottom-center"} expand={true} richColors offset={15} gap={8}/>
            <RouterProvider router={router} />
        </LanguageProvider>
    </React.StrictMode>,
);
