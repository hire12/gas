import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gas Management",
  description: "Manage your clinic effectively",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
          
          <div className="flex-1 ml-64 flex flex-col">
            <Header />
            
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}



// "use client";
// import { useState } from "react";
// import { Inter } from "next/font/google";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen((prev) => !prev);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="flex h-screen">
//           {/* Sidebar */}
//           <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
          
//           <div className="flex-1 lg:ml-64 flex flex-col">
//             {/* Header */}
//             <Header toggleSidebar={toggleSidebar} />
            
//             {/* Main Content */}
//             <main className="flex-1 overflow-y-auto p-6">{children}</main>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }
