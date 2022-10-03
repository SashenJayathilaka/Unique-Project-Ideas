type RandomeNumberType = {
    value: number
}

type PositiveNumber = RandomeNumberType & {
    isPositive: boolean
    isNegitive?:never
    isZero?: never
}

type NegitiveNumber = RandomeNumberType & {
    isNegitive: boolean
    isPositive?:never
    isZero?: never
}

type Zero= RandomeNumberType & {
    isZero: boolean
    isNegitive?: never
    isPositive?:never
}

type RandomNumberProps = PositiveNumber | NegitiveNumber | Zero

export const RandomNumber = ({
    value,
    isPositive,
    isNegitive,
    isZero,

}: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && "Positive"} {isNegitive && "Negitive"}{' '}
            {isZero && "Zero"}
        </div>
    )
}