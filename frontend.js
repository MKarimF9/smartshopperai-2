import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SmartShopper() {
  const [url, setUrl] = useState("");
  const [product, setProduct] = useState(null);
  const [deals, setDeals] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch("http://localhost:8000/scrape", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });
    const data = await response.json();
    setProduct(data);
  };

  const fetchDeals = async () => {
    const response = await fetch("http://localhost:8000/deals");
    const data = await response.json();
    setDeals(JSON.parse(data));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">SmartShopper</h1>
      <div className="mt-4 flex gap-2">
        <Input placeholder="Enter product URL" value={url} onChange={(e) => setUrl(e.target.value)} />
        <Button onClick={fetchProduct}>Check Price</Button>
      </div>
      {product && (
        <Card className="mt-4">
          <CardContent>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-lg">Price: {product.price}</p>
          </CardContent>
        </Card>
      )}
      <div className="mt-6">
        <Button onClick={fetchDeals}>Get Deals</Button>
        {deals.length > 0 && (
          <div className="mt-4">
            {deals.map((deal, index) => (
              <Card key={index} className="mt-2">
                <CardContent>
                  <h2 className="text-lg font-semibold">{deal.brand}</h2>
                  <p>{deal.discount}</p>
                  <a href={deal.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">View Deal</a>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
