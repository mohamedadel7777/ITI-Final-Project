import React from 'react'
import {Row, Container} from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import image from "../../images/brand1.png"

const CategoryContainer = () => {
  return (
   
   <Container>
    <div className='admin-content-text'>كل التصنيفات</div>
    <Row className='my-2 d-flex justify-content-between'>
     <CategoryCard background = {"#FFD3E8"} img = {image} title = "كل التصنيفات"  />
     <CategoryCard background = {"#FFD3E8"} img = {image} title = "كل التصنيفات"  />
     <CategoryCard background = {"#FFD3E8"} img = {image} title = "كل التصنيفات"  />
     <CategoryCard background = {"#FFD3E8"} img = {image} title = "كل التصنيفات"  />
     <CategoryCard background = {"#FFD3E8"} img = {image} title = "كل التصنيفات"  />
     <CategoryCard background = {"#FFD3E8"} img = {image} title = "كل التصنيفات"  />
     <CategoryCard background = {"#FFD3E8"} img = {image} title = "كل التصنيفات"  />
     <CategoryCard background = {"#FFD3E8"} img = {image} title = "كل التصنيفات"  />
     <CategoryCard background = {"#FFD3E8"} img = {image} title = "كل التصنيفات"  />
     <CategoryCard background = {"#FFD3E8"} img = {image} title = "كل التصنيفات"  />
     
    </Row>
   </Container>
    
    
  )
}

export default CategoryContainer
