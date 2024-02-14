type TPaper = {
    title?: string
    description?: string
}
export default function Paper({ description, title }: TPaper) {
    return (
        <div className="bg-white rounded-lg w-60 p-4">
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-center">{description}</p>
        </div>
    )
}
