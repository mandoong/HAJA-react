export default function SaveModal({ isOpen, onClose, message }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-10 w-150 ">
        <h2 className="text-ms font-semibold mb-4 text-center">{message}</h2>
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full px-4 py-2 bg-[#594bba] text-white rounded-md mt-4"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
