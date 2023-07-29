import { Col, Row, Table } from 'react-bootstrap';

function SizeGuideShoes() {
  return (
    <Row className="r-gap-30">
      <Col xs={12}>
        <div className="tab__header">
          <span>مخطط مقاس الأحذية</span>
        </div>
        {/*========== Table ==========*/}
        <Table striped bordered responsive hover>
          <tbody className="text-center">
            <tr>
              <th>امريكا</th>
              <th>اوروبا</th>
              <th>تركيا</th>
              <th>الصين</th>
              <th>اليابان</th>
              <th>الشرق الاوسط</th>
            </tr>
            <tr>
              <td>5</td>
              <td>35-36</td>
              <td>3</td>
              <td>3.5</td>
              <td>21.5</td>
              <td>35</td>
            </tr>
            <tr>
              <td>5.5</td>
              <td>36</td>
              <td>3.5</td>
              <td>4</td>
              <td>22</td>
              <td>35.5</td>
            </tr>
            <tr>
              <td>6</td>
              <td>36-37</td>
              <td>4</td>
              <td>4.5</td>
              <td>22.5</td>
              <td>36</td>
            </tr>
            <tr>
              <td>6.5</td>
              <td>37</td>
              <td>4.5</td>
              <td>5</td>
              <td>23</td>
              <td>36.5</td>
            </tr>
            <tr>
              <td>7</td>
              <td>37-38</td>
              <td>5</td>
              <td>5.5</td>
              <td>23.5</td>
              <td>37</td>
            </tr>
            <tr>
              <td>7.5</td>
              <td>38</td>
              <td>5.5</td>
              <td>6</td>
              <td>24</td>
              <td>37.5</td>
            </tr>
            <tr>
              <td>8</td>
              <td>38-39</td>
              <td>6</td>
              <td>6.5</td>
              <td>24.5</td>
              <td>38</td>
            </tr>
            <tr>
              <td>8.5</td>
              <td>39</td>
              <td>6.5</td>
              <td>7</td>
              <td>25</td>
              <td>38.5</td>
            </tr>
            <tr>
              <td>9</td>
              <td>39-40</td>
              <td>7</td>
              <td>7.5</td>
              <td>25.5</td>
              <td>39</td>
            </tr>
            <tr>
              <td>9.5</td>
              <td>40</td>
              <td>7.5</td>
              <td>8</td>
              <td>26</td>
              <td>39.5</td>
            </tr>
            <tr>
              <td>10</td>
              <td>40-41</td>
              <td>8</td>
              <td>8.5</td>
              <td>26.5</td>
              <td>40</td>
            </tr>
            <tr>
              <td>11</td>
              <td>41-42</td>
              <td>9</td>
              <td>9.5</td>
              <td>27.5</td>
              <td>41</td>
            </tr>
          </tbody>
        </Table>
        {/*========== Table ==========*/}
      </Col>
    </Row>
  );
}

export default SizeGuideShoes;
