import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Page Not Found | Flavory";
    }, []);

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100 px-4">
            <Helmet>
                <title>404 - Page Not Found</title>
                <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
            </Helmet>
            <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="404 Error"
                className="w-48 h-48 mb-6"
            />
            <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
            <p className="text-lg text-gray-500 mb-6 text-center">The page you're looking for doesn't exist or has been moved.</p>
            <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-700 transition "
            >
                Go Back Home
            </button>
        </div>
    );
};

export default ErrorPage;