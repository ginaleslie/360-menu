import React, { useState, useContext } from "react"
import { Card, Bottom, Top, Info, Favorite, Count, Line } from "./styles"
import ProductName from "../ProductName"
import Price from "../Price"
import ProductsContext from "../../context/Products"
import ProductBtn from "../ProductBtn"
import Copy from "../Copy"
import ProductImage from "../ProductImage"
import ProductIcon from "../ProductIcon"
import Icon from "../Icon"
// import CategoryButton from "../CategoryButton"

const DrinkCard = ({
  product: { name, description, unitCost, likes },
  product,
}) => {
  const [liked, setLiked] = useState(false)

  const { activeCategory } = useContext(ProductsContext)

  return (
    <Card>
      {Boolean(product?.images?.[0].thumbnails.large) ? (
        <ProductImage
          source={product?.images?.[0].thumbnails.large.url}
          alt={name}
          borderRad="borderDrink"
        />
      ) : (
        <ProductIcon
          icon={activeCategory.icon}
          maxWidth="widthFood"
          minWidth="widthFood"
          borderRad="borderFood"
        />
      )}
      <div>
        <Favorite onClick={() => setLiked(!liked)}>
          {liked ? (
            <Icon name="FULLHEART" size="medium" />
          ) : (
            <Icon name="HEART" size="medium" />
          )}
        </Favorite>
        <Info>
          <Top>
            <ProductName>{name}</ProductName>
            <Count>
              <Icon name="HEART" color="grayTwo" size="small" />
              <Copy>{likes}</Copy>
            </Count>
            <Copy>{description}</Copy>
            <Line />
          </Top>
          <Bottom>
            <Price
              size="small"
              color="secondary"
              amount={unitCost}
              paddingRight="large"
            />
            <ProductBtn product={product} />
          </Bottom>
        </Info>
      </div>
    </Card>
  )
}

export default DrinkCard
