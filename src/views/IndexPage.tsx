import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks)

  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10"  >
      <h1 className="text-6xl font-extrabold col-span-full" >Recipes</h1>
      {hasDrinks ? (
        <>
          {drinks.drinks.map( (drink) => (
            <DrinkCard 
              key={drink.idDrink}
              drink={drink}
            />
          ) )}
        </>
      ) : (
        <p className="my-10 text-center text-2xl" >No results yet</p>
      )}
    </div>
  )
}
