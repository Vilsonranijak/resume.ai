import { Button } from "./components/ui/button";

export default function App() {
  return (
    <>
      <h1>Oi Amor!</h1>
      <Button onClick={() => alert("Casa comigo?")}>Tem Amo ❤️</Button>
    </>
  );
}
