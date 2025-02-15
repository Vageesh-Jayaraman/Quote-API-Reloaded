import Header from "@/components/helpers/Header";
import { snippets } from "./snippets";
import CodeBlock from "@/components/helpers/CodeBlock";
import NavBar from "@/components/helpers/NavBar";

export default function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <Header title="Documentation" />
            {snippets.map(([route, param, query, code], index) => (
                <CodeBlock key={index} link={route} params={param} query={query} code={code} />
            ))}
        </div>
    );
}
