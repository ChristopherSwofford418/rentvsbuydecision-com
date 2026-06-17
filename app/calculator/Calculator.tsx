"use client";
import { useState } from "react";

export default function Calculator() {
  const [homePrice, setHomePrice] = useState<string>("400000");
  const [downPct, setDownPct] = useState<string>("20");
  const [mortgageRate, setMortgageRate] = useState<string>("6.75");
  const [monthlyRent, setMonthlyRent] = useState<string>("2200");
  const [years, setYears] = useState<string>("7");
  const [appreciation, setAppreciation] = useState<string>("3");

  const price = parseFloat(homePrice) || 0;
  const down = price * (parseFloat(downPct) / 100);
  const loan = price - down;
  const r = parseFloat(mortgageRate) / 100 / 12;
  const n = 360;
  const pi = r > 0 ? loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1) : loan / n;
  const taxInsurance = price * 0.015 / 12;
  const maintenance = price * 0.01 / 12;
  const totalOwn = pi + taxInsurance + maintenance;

  const rent = parseFloat(monthlyRent) || 0;
  const yrs = parseInt(years) || 7;
  const appRate = parseFloat(appreciation) / 100;

  // Future home value
  const futureValue = price * Math.pow(1 + appRate, yrs);
  // Selling costs (6%)
  const sellingCosts = futureValue * 0.06;
  // Equity built (simplified)
  const equity = futureValue - loan - sellingCosts;

  // Total cost of buying over period
  const totalBuyCost = (totalOwn * 12 * yrs) + down - equity + (price * 0.03); // +3% buying costs
  // Total cost of renting over period
  const totalRentCost = rent * 12 * yrs;

  const buyWins = totalBuyCost < totalRentCost;
  const diff = Math.abs(totalRentCost - totalBuyCost);

  return (
    <div className="bg-soft rounded-2xl p-6 border border-line">
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Home Purchase Price</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" className="w-full border border-line rounded-lg pl-8 pr-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={homePrice} onChange={e => setHomePrice(e.target.value)} min="100000" max="3000000" step="10000" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Down Payment (%)</label>
          <input type="number" className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={downPct} onChange={e => setDownPct(e.target.value)} min="3" max="100" step="1" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Mortgage Rate (%)</label>
          <input type="number" className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={mortgageRate} onChange={e => setMortgageRate(e.target.value)} min="3" max="12" step="0.125" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Monthly Rent (Alternative)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" className="w-full border border-line rounded-lg pl-8 pr-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={monthlyRent} onChange={e => setMonthlyRent(e.target.value)} min="500" max="20000" step="100" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Time Horizon (Years)</label>
          <input type="number" className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={years} onChange={e => setYears(e.target.value)} min="1" max="30" step="1" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Annual Appreciation (%)</label>
          <input type="number" className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={appreciation} onChange={e => setAppreciation(e.target.value)} min="-5" max="10" step="0.5" />
        </div>
      </div>

      <div className={`rounded-xl p-6 border-2 ${buyWins ? "border-green-500 bg-green-50" : "border-blue-500 bg-blue-50"} mb-4`}>
        <div className={`text-2xl font-bold ${buyWins ? "text-green-700" : "text-blue-700"}`}>
          {buyWins ? "🏠 Buying Saves More" : "🏢 Renting Saves More"} over {yrs} years
        </div>
        <div className={`text-lg mt-1 ${buyWins ? "text-green-600" : "text-blue-600"}`}>
          Estimated savings: ${Math.round(diff).toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 border border-line">
          <div className="text-sm font-semibold text-ink mb-2">Buying</div>
          <div className="text-xl font-bold text-ink">${Math.round(totalOwn).toLocaleString()}/mo</div>
          <div className="text-xs text-gray-500">Total monthly cost (PITI + maintenance)</div>
          <div className="text-sm text-gray-600 mt-2">Total over {yrs} yrs: ${Math.round(totalBuyCost).toLocaleString()}</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-line">
          <div className="text-sm font-semibold text-ink mb-2">Renting</div>
          <div className="text-xl font-bold text-ink">${Math.round(rent).toLocaleString()}/mo</div>
          <div className="text-xs text-gray-500">Monthly rent payment</div>
          <div className="text-sm text-gray-600 mt-2">Total over {yrs} yrs: ${Math.round(totalRentCost).toLocaleString()}</div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4">Simplified model. Does not include investment returns on down payment, rent increases, or tax deductions. For educational purposes only.</p>
    </div>
  );
}
