export const CollectionSelector = ({
    url,
    onClose,
}:{
    url: string;
    onClose: () => void;
}) => {
    return (  
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
   {url}
    <button onClick={onClose} className="absolute top-4 right-4 bg-white text-black p-2 rounded">Close</button>
        </div>

    );
}
 