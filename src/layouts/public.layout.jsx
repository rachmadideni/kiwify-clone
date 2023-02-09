// const PublicLayout = (props) => <div className="flex flex-1 flex-col h-screen w-full bg-slate-100 mx-auto justify-center items-center">{props.children}</div>
const PublicLayout = (props) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">            
            {props.children}            
        </div>
    )
}
export default PublicLayout;