const Header = ({ date, status, onTodayClick }) => {
    const formattedDate = new Intl.DateTimeFormat('vi-VN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    }).format(date.toDate());

    return (
        <div className="flex items-center justify-between p-6">
            <div>
                <div className="text-(--content)">{formattedDate}</div>
                <div className="text-3xl text-(--title) font-medium uppercase">{status}</div>
            </div>
            <button
                type="button"
                onClick={onTodayClick}
                className="rounded border border-(--link) px-2 py-1 text-(--link) hover:bg-white/40"
            >
                Reset
            </button>
        </div>
    )
}

export default Header;