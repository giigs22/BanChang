<template>
    <h1 class="text-xl dark:text-white">{{$t('recent_complaint')}}</h1>
                        <div class="table-complaint px-4 lg:px-10 lg:overflow-hidden overflow-scroll">
                            <div class="text-right py-3">
                                <button class="btn-purple">> {{$t('read_more')}}</button>
                            </div>
                            <table class="table-auto lg:w-full">
                                <thead class="bg-head-table-comp">
                                    <tr>
                                        <td>{{$t('no')}}</td>
                                        <td>{{$t('topic')}}</td>
                                        <td>{{$t('category')}}</td>
                                        <td>{{$t('date_time')}}</td>
                                        <td>{{$t('responsible_agency')}}</td>
                                        <td>{{$t('location')}}</td>
                                        <td>{{$t('status')}}</td>
                                        <td>{{$t('action')}}</td>
                                    </tr>
                                </thead>
                                <tbody class="bg-body-table-comp">
                                    <tr>
                                        <td>1</td>
                                        <td>ร้องเรียนเรื่องไฟฟ้า</td>
                                        <td>Electricity</td>
                                        <td>DD/MM/YYYY HH:MM</td>
                                        <td>A</td>
                                        <td>13.855894,100.742424</td>
                                        <td>Pending</td>
                                        <td>Reply</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>ร้องเรียนเรื่องไฟฟ้า</td>
                                        <td>Electricity</td>
                                        <td>DD/MM/YYYY HH:MM</td>
                                        <td>A</td>
                                        <td>13.855894,100.742424</td>
                                        <td>Pending</td>
                                        <td>Reply</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>ร้องเรียนเรื่องไฟฟ้า</td>
                                        <td>Electricity</td>
                                        <td>DD/MM/YYYY HH:MM</td>
                                        <td>A</td>
                                        <td>13.855894,100.742424</td>
                                        <td>Pending</td>
                                        <td>Reply</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>ร้องเรียนเรื่องไฟฟ้า</td>
                                        <td>Electricity</td>
                                        <td>DD/MM/YYYY HH:MM</td>
                                        <td>A</td>
                                        <td>13.855894,100.742424</td>
                                        <td>Pending</td>
                                        <td>Reply</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ร้องเรียนเรื่องไฟฟ้า</td>
                                        <td>Electricity</td>
                                        <td>DD/MM/YYYY HH:MM</td>
                                        <td>A</td>
                                        <td>13.855894,100.742424</td>
                                        <td>Pending</td>
                                        <td>Reply</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="py-5 clear-both"></div>
                        </div>
</template>