 import './app.css'
 import {TwitterFollowCard} from './twitterFollowCard';
 
 export function App() {
    return (
   <section className='App'>
   <TwitterFollowCard userName="salazarweb">
  David Salazar Jimènez
   </TwitterFollowCard>

   <TwitterFollowCard userName="midudev">
   Miguel Àngel Duràn
   </TwitterFollowCard>

   <TwitterFollowCard userName="freddier">
   Freddy Vega
    </TwitterFollowCard>

    <TwitterFollowCard userName="pheralb">
   Pablo Hernandez
    </TwitterFollowCard>
   </section>
    )
 }