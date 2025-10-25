import '../styles/DrugCardComponent.css'

function DrugCardComponent() {
    // Static dummy data
    const drugData = {
        brandName: "Tylenol",
        genericName: "Acetaminophen",
        manufacturer: "Johnson & Johnson",
        strength: "500mg",
        price: "$12.99",
        description: "Pain reliever and fever reducer for adults and children",
        sideEffects: [
            "Nausea",
            "Stomach pain",
            "Loss of appetite",
            "Headache"
        ],
        dosageForm: "Tablets",
        quantity: "100 tablets per bottle"
    };

    return (
       <div className="drug-card">
            <div className="drug-card-header">
                <h2>{drugData.brandName}</h2>
                <p className="generic-name">{drugData.genericName}</p>
            </div>
            <div className="drug-card-content">
                <div className="drug-info">
                    <p><strong>Manufacturer:</strong> {drugData.manufacturer}</p>
                    <p><strong>Strength:</strong> {drugData.strength}</p>
                    <p><strong>Form:</strong> {drugData.dosageForm}</p>
                    <p><strong>Quantity:</strong> {drugData.quantity}</p>
                </div>
                <div className="drug-description">
                    <p>{drugData.description}</p>
                </div>
                <div className="side-effects">
                    <strong>Common Side Effects:</strong>
                    <ul>
                        {drugData.sideEffects.map((effect, index) => (
                            <li key={index}>{effect}</li>
                        ))}
                    </ul>
                </div>
                <div className="drug-price">
                    <span className="price-tag">{drugData.price}</span>
                </div>
            </div>
        </div>
    );
};

export default DrugCardComponent;