export default function CommentCard({ children, name, comment, date }) {
  return (
    <div className="border rounded-lg p-4 hover:border-[#ea6560] transition-colors">
      <div className="flex items-center gap-3 h-16">
        <div className="flex-1">
          <div className="text-sm mb-2">{name}</div>
          <div className="text-xs text-[#999] line-clamp-2">{comment}</div>
          <div className="text-xs text-[#999] line-clamp-2">{date}</div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
