const NotFound = () => {
    return (
        <div class="min-h-[80vh] flex flex-grow items-center justify-center bg-gray-50">
            <div class="rounded-lg bg-white p-8 text-center shadow-xl">
                <div class="mb-4 text-4xl font-bold"> 404</div>
                <p class="text-gray-600">Oops! The page you are looking for could not be found.</p>
                <a href="/" class="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Home </a>
            </div>
        </div>
    )
}
export default NotFound;