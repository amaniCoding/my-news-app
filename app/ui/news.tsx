'use client'
import Image from "next/image"
import LatestNews from "./latest-news"
export default function News() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 p-3 gap-4">
          <div className="md:col-span-8 col-span-1">
            <p className="font-bold text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit a placeat expedita quasi quae unde, commodi, excepturi sunt maiores optio omnis voluptatum veritatis.</p>
            <p className="my-2 font-semibold text-lg">2:42 PM 1/10/2025</p>
            <Image
              src={`/tr.jpg`}
              width={0}
              height={0}
              sizes="100vh"
              alt="My news app developed by Amanuel Ferede"
              className="w-full"
            />
            <div className="my-3 leading-relaxed text-lg">
             <p className="my-2">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt non fuga inventore? Rerum sequi reprehenderit pariatur incidunt deleniti consequuntur omnis quis totam eos impedit vero, dolore libero, in doloribus optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fuga animi? Ea debitis fuga dignissimos itaque delectus facilis doloribus aliquid incidunt blanditiis sit necessitatibus, neque quae commodi quam aliquam excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore illo saepe expedita vitae tempore at eius eum temporibus facilis sit exercitationem distinctio, maxime 
             </p>
            <p className="my-2">
            aspernatur, neque voluptate similique fuga, laborum voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam saepe minima sint, nemo amet expedita commodi aperiam accusantium rerum eaque eveniet temporibus minus vitae incidunt. Reprehenderit non ab omnis facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus voluptatibus minima corrupti rem. Tenetur, numquam fugit quia veniam aliquid fuga deserunt iusto, sint sequi vel qui eos reprehenderit mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis, tempora odio nulla sint dicta. Corporis impedit, dicta maxime, dolor culpa consequatur voluptatem ipsam obcaecati veniam, quae
            </p>

            <p className="my-2">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt non fuga inventore? Rerum sequi reprehenderit pariatur incidunt deleniti consequuntur omnis quis totam eos impedit vero, dolore libero, in doloribus optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fuga animi? Ea debitis fuga dignissimos itaque delectus facilis doloribus aliquid incidunt blanditiis sit necessitatibus, neque quae commodi quam aliquam excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore illo saepe expedita vitae tempore at eius eum temporibus facilis sit exercitationem distinctio, maxime 
             </p>
            <p className="my-2">
            aspernatur, neque voluptate similique fuga, laborum voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam saepe minima sint, nemo amet expedita commodi aperiam accusantium rerum eaque eveniet temporibus minus vitae incidunt. Reprehenderit non ab omnis facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus voluptatibus minima corrupti rem. Tenetur, numquam fugit quia veniam aliquid fuga deserunt iusto, sint sequi vel qui eos reprehenderit mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis, tempora odio nulla sint dicta. Corporis impedit, dicta maxime, dolor culpa consequatur voluptatem ipsam obcaecati veniam, quae
            </p>

           <p className="my-2">
           necessitatibus. Voluptatibus, earum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ab cupiditate in pariatur facere earum architecto, nesciunt modi cum labore ipsum perferendis, quis debitis repellendus, reprehenderit asperiores sequi. Eius, aut!
           </p>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
          <p className="text-lg my-3">Catch up on today’s global news</p>
            <LatestNews/>
          </div>
        </div>
      </div>
    </section>
  )
}