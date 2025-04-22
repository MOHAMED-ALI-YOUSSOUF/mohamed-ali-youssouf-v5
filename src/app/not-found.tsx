export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4">The page you are looking for does not exist.</p>
            <a href="/" className="mt-4 text-blue-500">Go back to Home</a>
            <p className="mt-4">Please check the URL or return to the homepage.</p>
            <p className="mt-4">If you believe this is an error, please contact support.</p>
            
            
        </div>
    )
}