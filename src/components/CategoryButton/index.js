import React from "react"
import { Button, Center, Text } from "./styles"

const CategoryButton = ({ icon, click, text, color, bg }) => (
  <Button onClick={click} bg={bg}>
    <div>
      <Center>{icon}</Center>
      <Text color={color}>{text}</Text>
    </div>
  </Button>
)

export default CategoryButton