export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return(
    <>
        <h2>Inner Layout Item</h2>
        {children}
    </>
    
  );
}
