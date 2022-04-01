import React, { useEffect, useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { 
  Card,
  Button,
  Collapse,
  Container,
  Col,
  Row,
  Table
} from 'react-bootstrap';

export default function CatCard(cat) {

  // console.log(cat.cat.name, "ucing");
  // console.log(cat.cat.image.url, "ucing");

  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className='mb-3'>

        <Card.Img 
          variant='top'
          src={cat?.cat?.image?.url} 
          className='px-0'
        />

        <Card.Body>

          <div className="d-flex justify-content-between">
            <Card.Title>{cat.cat.name}</Card.Title>

            <Button 
              size="sm"
              variant="warning"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              {(() => {
                if (open) {
                  return ( 
                    <IoChevronUpOutline />
                  )
                } else {
                  return (
                    <IoChevronDownOutline />
                  )
                }
              })()}
            </Button>
          </div>

          <Collapse in={open} className='mt-2'>
            <div id="example-collapse-text">
              <Card.Text>
                {cat.cat.description}
              </Card.Text>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Origin</td>
                    <td>{cat.cat.origin}</td>
                  </tr>
                  <tr>
                    <td>Adaptability</td>
                    {(() => {
                      switch (cat.cat.adaptability) {
                        case 1:
                          return (
                            <td>★☆☆☆☆</td>
                          )
                        case 2:
                          return (
                            <td>★★☆☆☆</td>
                          )
                        case 3:
                          return (
                            <td>★★★☆☆</td>
                          )
                        case 4:
                          return (
                            <td>★★★★☆</td>
                          )
                        case 5:
                          return (
                            <td>★★★★★</td>
                          )
                        default:
                          return (
                            <td>☆☆☆☆☆</td>
                          )
                      }
                    })()}
                  </tr>
                  <tr>
                    <td>Energy Level</td>
                    {(() => {
                      switch (cat.cat.energy_level) {
                        case 1:
                          return (
                            <td>★☆☆☆☆</td>
                          )
                        case 2:
                          return (
                            <td>★★☆☆☆</td>
                          )
                        case 3:
                          return (
                            <td>★★★☆☆</td>
                          )
                        case 4:
                          return (
                            <td>★★★★☆</td>
                          )
                        case 5:
                          return (
                            <td>★★★★★</td>
                          )
                        default:
                          return (
                            <td>☆☆☆☆☆</td>
                          )
                      }
                    })()}
                  </tr>
                  <tr>
                    <td>Child Friendly</td>
                    {(() => {
                      switch (cat.cat.child_friendly) {
                        case 1:
                          return (
                            <td>★☆☆☆☆</td>
                          )
                        case 2:
                          return (
                            <td>★★☆☆☆</td>
                          )
                        case 3:
                          return (
                            <td>★★★☆☆</td>
                          )
                        case 4:
                          return (
                            <td>★★★★☆</td>
                          )
                        case 5:
                          return (
                            <td>★★★★★</td>
                          )
                        default:
                          return (
                            <td>☆☆☆☆☆</td>
                          )
                      }
                    })()}
                  </tr>
                  <tr>
                    <td>Life Span</td>
                    <td>{cat.cat.life_span} years</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Collapse>
        </Card.Body>

      </Card>
    </>
  )
}
