'use client'

import Link from "next/link"
import Image from "next/image"
export function FeaturedSections() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-2">
        <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Space and Science</p>
        <Image
          src={`/space.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <div>
          <p className="my-3 font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum labore possimus repudiandae enim maiores culpa quia? </p>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
        </div>
      </div>

      <div className="p-2">
        <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Travel</p>
        <Image
          src={`/travel.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <div>
          <p className="my-3 font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum labore possimus repudiandae enim maiores culpa quia? </p>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
        </div>
      </div>

      <div className="p-2">
        <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Global Business</p>
        <Image
          src={`/bus.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <div>
          <p className="my-3 font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum labore possimus repudiandae enim maiores culpa quia? </p>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
        </div>
      </div>

      <div className="p-2">
        <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Style</p>
        <Image
          src={`/style.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <div>
          <p className="my-3 font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum labore possimus repudiandae enim maiores culpa quia? </p>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
        </div>
      </div>

      <div className="p-2">
        <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Sports</p>
        <Image
          src={`/sport.jpeg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <div>
          <p className="my-3 font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum labore possimus repudiandae enim maiores culpa quia? </p>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
        </div>
      </div>

      <div className="p-2">
        <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Politics</p>
        <Image
          src={`/pol.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <div>
          <p className="my-3 font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum labore possimus repudiandae enim maiores culpa quia? </p>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
        </div>
      </div>

      <div className="p-2">
        <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Health and well-ness</p>
        <Image
          src={`/hel.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <div>
          <p className="my-3 font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum labore possimus repudiandae enim maiores culpa quia? </p>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
        </div>
      </div>

      <div className="p-2">
        <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Tech</p>
        <Image
          src={`/tech.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <div>
          <p className="my-3 font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum labore possimus repudiandae enim maiores culpa quia? </p>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
          </Link>
        </div>
      </div>
    </div>
  )
}