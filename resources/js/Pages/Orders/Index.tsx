import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Order, PaginatedData } from '@/types';
import { Head, Link } from '@inertiajs/react'
import React from 'react'

interface Props {
  orders: PaginatedData<Order>;
}

// show all the orders in the dashboard
export default function Index({ orders }: Props) {

    // console.log(orders)
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Daftar Order</h1>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Template
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Domain
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal Order
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.data.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                    {/* log title webs */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <>{ console.log(order) }</>
                </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        {orders.last_page > 1 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <Link
                href={`/orders?page=${orders.current_page - 1}`}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                  orders.current_page === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                preserveScroll
              >
                Previous
              </Link>
              <Link
                href={`/orders?page=${orders.current_page + 1}`}
                className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                  orders.current_page === orders.last_page ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                preserveScroll
              >
                Next
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

