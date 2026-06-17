"use client";
import { useState, useMemo } from "react";
import AdSlot from "@/components/AdSlot";

const defaultInputs = {
    "careType": "Home health aide (part-time)",
    "state": "National Average",
    "duration": "1 year",
    "inflation": "Yes (3% annual increase)"
};

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export default function LongTermCareCostCalcCalculator() {
  const [inputs, setInputs] = useState<Record<string, string>>(defaultInputs);

  const result = useMemo(() => {
    try {
      const fn = new Function("inputs", `const baseCosts = {
  "Home health aide (part-time)":2600,"Home health aide (full-time)":5720,
  "Adult day care":1690,"Assisted living facility":4500,
  "Memory care facility":5800,"Nursing home (semi-private)":8669,
  "Nursing home (private room)":9733
};
const stateMulti = {"National Average":1,"Alaska":2.1,"Massachusetts":1.6,"Connecticut":1.55,"New York":1.7,"New Jersey":1.5,"California":1.4,"Texas":0.85,"Florida":1.0,"Georgia":0.8,"Mississippi":0.7};
const durYears = {"1 year":1,"2 years":2,"3 years":3,"5 years":5,"7 years":7,"10+ years":10}[inputs.duration] || 3;
const monthly = Math.round((baseCosts[inputs.careType] || 4500) * (stateMulti[inputs.state] || 1));
const useInflation = inputs.inflation.includes("Yes");
let total = 0;
for (let y = 0; y < durYears; y++) {
  total += monthly * 12 * (useInflation ? Math.pow(1.03, y) : 1);
}
const medicaidNote = monthly * 12 > 24000;
return {monthly, total: Math.round(total), durYears, medicaidNote};
`);
      return fn(inputs);
    } catch { return null; }
  }, [inputs]);

  return (
    <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
      <div className="bg-soft border-b border-line px-6 py-4">
        <h2 className="font-serif text-xl font-bold">Long-Term Care Cost Estimator</h2>
        <p className="text-sm text-gray-600 mt-1">Estimate long-term care costs in your state and calculate how much you need to save or insure for future care needs.</p>
      </div>
      <div className="p-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Type of Care</label>
            <select value={inputs["careType"]} onChange={e => setInputs(p => ({...p, "careType": e.target.value}))}
              className="w-full border border-line rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="Home health aide (part-time)">Home health aide (part-time)</option>
              <option value="Home health aide (full-time)">Home health aide (full-time)</option>
              <option value="Adult day care">Adult day care</option>
              <option value="Assisted living facility">Assisted living facility</option>
              <option value="Memory care facility">Memory care facility</option>
              <option value="Nursing home (semi-private)">Nursing home (semi-private)</option>
              <option value="Nursing home (private room)">Nursing home (private room)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Your State</label>
            <select value={inputs["state"]} onChange={e => setInputs(p => ({...p, "state": e.target.value}))}
              className="w-full border border-line rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="National Average">National Average</option>
              <option value="Alaska">Alaska</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Connecticut">Connecticut</option>
              <option value="New York">New York</option>
              <option value="New Jersey">New Jersey</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Mississippi">Mississippi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Expected Duration of Care</label>
            <select value={inputs["duration"]} onChange={e => setInputs(p => ({...p, "duration": e.target.value}))}
              className="w-full border border-line rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="1 year">1 year</option>
              <option value="2 years">2 years</option>
              <option value="3 years">3 years</option>
              <option value="5 years">5 years</option>
              <option value="7 years">7 years</option>
              <option value="10+ years">10+ years</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Include Cost Inflation?</label>
            <select value={inputs["inflation"]} onChange={e => setInputs(p => ({...p, "inflation": e.target.value}))}
              className="w-full border border-line rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="Yes (3% annual increase)">Yes (3% annual increase)</option>
              <option value="No (today's costs only)">No (today's costs only)</option>
            </select>
          </div>
        </div>
        <div className="bg-soft rounded-xl p-6">
          <h3 className="font-serif text-lg font-bold mb-4">Estimated Total Care Cost</h3>
          {result ? (
            <div className="space-y-3 text-sm">
              {result.low !== undefined && result.high !== undefined && (
                <>
                  <div className="flex justify-between border-b border-line pb-2">
                    <span className="text-gray-600">Low estimate</span>
                    <span className="font-semibold text-green-700">{fmt(result.low)}</span>
                  </div>
                  <div className="flex justify-between border-b border-line pb-2">
                    <span className="text-gray-600">High estimate</span>
                    <span className="font-semibold text-red-700">{fmt(result.high)}</span>
                  </div>
                </>
              )}
              {result.total !== undefined && result.low === undefined && (
                <div className="flex justify-between border-b border-line pb-2">
                  <span className="font-bold text-ink">Total Estimated Cost</span>
                  <span className="font-bold text-2xl text-accent">{fmt(result.total)}</span>
                </div>
              )}
              {result.payment !== undefined && (
                <div className="flex justify-between border-b border-line pb-2">
                  <span className="font-bold text-ink">Monthly Payment</span>
                  <span className="font-bold text-2xl text-accent">{fmt(result.payment)}</span>
                </div>
              )}
              {result.months !== undefined && (
                <div className="flex justify-between border-b border-line pb-2">
                  <span className="text-gray-600">Payoff timeline</span>
                  <span className="font-semibold">{result.yrs}y {result.mos}m</span>
                </div>
              )}
              {result.attyFee !== undefined && (
                <div className="flex justify-between border-b border-line pb-2">
                  <span className="text-gray-600">Est. attorney fee (33%)</span>
                  <span className="font-semibold text-gray-700">{fmt(result.attyFee)}</span>
                </div>
              )}
              {result.net !== undefined && (
                <div className="flex justify-between pt-1">
                  <span className="font-bold text-ink">Est. net to you</span>
                  <span className="font-bold text-xl text-accent">{fmt(result.net)}</span>
                </div>
              )}
              {result.qualifies !== undefined && (
                <div className={`p-4 rounded-lg text-center font-bold text-lg ${result.qualifies ? "bg-green-50 text-green-700" : result.chipQualifies ? "bg-blue-50 text-blue-700" : "bg-red-50 text-red-700"}`}>
                  {result.qualifies ? "✓ Likely Eligible for Medicaid" : result.chipQualifies ? "✓ Child May Qualify for CHIP" : "✗ May Not Qualify — Check Marketplace"}
                  <div className="text-sm font-normal mt-1">Income is {result.fplPct}% of Federal Poverty Level</div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Fill in the fields to see your estimate.</p>
          )}
          <p className="text-xs text-gray-400 mt-4">Estimates only. Actual amounts vary. Consult a qualified professional for your specific situation.</p>
        </div>
      </div>
      <AdSlot slot="3456789012" format="horizontal" />
    </div>
  );
}
