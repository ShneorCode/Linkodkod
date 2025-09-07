import PostCard from "./PostCard";

export default function Homepage() {
  return (
    <div className="posts">
      <PostCard
        user="מוישי - קודקוד א"
        img="https://did.li/xRSIw"
        description='עשרה טיפים חשובים לקראת המעבר ליחידות בצה"ל'
        date="07.09.2025"
        likes="5"
      />
      <PostCard
        user="חיים - קודקוד ד"
        img="https://did.li/bXBx5"
        description="רשמים מהאקתון בליל שישי - חוויה בלתי נשכחת"
        date="07.09.2025"
        likes="6"
      />
      <PostCard
        user="מנחם - קודקוד ג"
        img="https://did.li/2uYrl"
        description="שימוש בבינה מלאכותית במהלך הלימודים - יתרונות וחסרונות"

        date="07.09.2025"
        likes="7"
      />
    </div>
  );
}
