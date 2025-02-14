import CodeBlock from "@/components/helpers/CodeBlock";
import Header from "@/components/helpers/Header";
import FloatingNavDemo from "@/components/helpers/NavBar";

export default function Home(){
  return (
    <div>
      
      <FloatingNavDemo></FloatingNavDemo>
      <Header title="Quote API"></Header>
      <CodeBlock code={""} params={""} link={"www.google.com"}></CodeBlock>

    </div>
    
  );
}