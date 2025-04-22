<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('act')->nullable();
            $table->string('wrk')->nullable(); 
            $table->string('customer_contact')->nullable(); 
            $table->string('booking_id')->nullable(); 
            $table->string('course_name')->nullable(); 
            $table->date('purchase_date')->nullable(); 
            $table->string('payment')->nullable();
            $table->string('bkg')->nullable();
            $table->string('etk')->nullable(); 
            $table->string('cnl')->nullable(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leads');
    }
};