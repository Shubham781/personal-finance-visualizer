// app/page.js
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const transactions = [
    // Example data (replace with real data from your API)
    { _id: "1", amount: 50, date: "2023-10-01", description: "Groceries", category: "Food" },
    { _id: "2", amount: 30, date: "2023-10-02", description: "Gas", category: "Transport" },
  ];

  return (
    <main>
      <h1>Personal Finance Visualizer</h1>
      <Dashboard transactions={transactions} />
    </main>
  );
}
