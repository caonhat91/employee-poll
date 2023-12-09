import PollShell from "../../Templates/PollShelf";

export default function Home() {
    const polls = [
        
    ];
    return (
        <main>
            <PollShell headline="Poll Unanswered" polls={[]} />
            <PollShell headline="Poll Answered" polls={[]} />
        </main>
    );
}