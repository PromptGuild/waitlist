import { Input } from "../../components";

export const Home: React.FC = () => {
   return (
      <div className="home">
         <h1>The freelance marketplace for</h1>
         <h2>Prompt Engineers</h2>
         <Input type="email"  />
      </div>
   );
};
